const CompositePath = require('../path/compositePath');
const Response = require('../http/response');
const Logger = require('../util/logger');
const HttpException = require('../exception/httpException');

let requestCounter = 0;

class Client extends CompositePath {
  constructor(environment, httpClient, defaultSerializer = null, logger = null) {
    super();
    this.environment = environment;
    this.httpClient = httpClient;
    this.defaultSerializer = defaultSerializer;
    this.logger = logger || new Logger();
  }

  getEnvironment() {
    return this.environment;
  }

  serialize(body, serializer = null) {
    const s = serializer || this.defaultSerializer;

    if (!s) {
      return body;
    }

    if (typeof body.jsonSerialize === 'function') {
      body = body.jsonSerialize();
    }

    if (typeof body === 'object' && body !== null) {
      return s.serialize(body);
    }

    return body;
  }

  responseReceived(response) {
    return response.unSerialize();
  }

  exceptionThrown(e) {
    throw e;
  }

  get(path, query = {}, header = {}) {
    return this.request('get', this.joinPath(path), null, query, header);
  }

  post(path, body, query = {}, header = {}) {
    return this.request('post', this.joinPath(path), body, query, header);
  }

  put(path, body, query = {}, header = {}) {
    return this.request('put', this.joinPath(path), body, query, header);
  }

  patch(path, body, query = {}, header = {}) {
    return this.request('patch', this.joinPath(path), body, query, header);
  }

  delete(path, body, query = {}, header = {}) {
    return this.request('delete', this.joinPath(path), body, query, header);
  }

  head(path, query = {}, header = {}) {
    return this.request('head', this.joinPath(path), null, query, header);
  }

  async request(
    method,
    url,
    body,
    query = {},
    header = {},
    inputSerializer = null,
    outputSerializer = null
  ) {
    const requestId = this.incrementRequestCounter();

    const outSerializer = outputSerializer || this.defaultSerializer;
    const inSerializer = inputSerializer || this.defaultSerializer;

    if (inSerializer) {
      header['Content-Type'] = header['Content-Type'] || inSerializer.getContentType();
    }

    if (outSerializer) {
      header['Accept'] = header['Accept'] || outSerializer.getContentType();
    }

    this.logger.debug(`(${requestId}) ${method} ${url} : Sending request`, { body, query, header });

    try {
      const responseData = await this.httpClient.request(
        method,
        url,
        this.serialize(body, inSerializer),
        query,
        header
      );

      const response = Response.from(
        responseData,
        this.httpClient.lastResponseHeaders(),
        this.httpClient.lastResponseStatusCode()
      );
      response.setSerializer(outSerializer);

      this.logger.debug(`(${requestId}) ${method} ${url} : Read successful`, { response: response.getBody() });
      return this.responseReceived(response) || response;
    } catch (e) {
      if (e instanceof HttpException) {
        const response = e.getResponse();
        this.logger.error(
          `(${requestId}) ${method} ${url} : Read failed with status code ${e.getStatusCode()} ${e.getStatusMessage()}`,
          { exception: e.toString(), response: response ? response.getBody() : null }
        );

        if (response) {
          response.setSerializer(outSerializer);
        }
      } else {
        this.logger.error(
            `(${requestId}) ${method} ${url} : Read failed with unhandled exception`,
            { exception: e.toString() }
        );
      }
      this.exceptionThrown(e);
    }
  }

  getParent() {
    return this.environment.getParent();
  }

  setParent(parent) {
    this.environment.setParent(parent);
  }

  getPath() {
    return this.environment.getPath();
  }

  joinPath(relative) {
    try {
      new URL(relative);
      return relative;
    } catch (e) {
      return this.environment.joinPath(relative);
    }
  }

  incrementRequestCounter() {
    return ++requestCounter;
  }
}

module.exports = Client;
