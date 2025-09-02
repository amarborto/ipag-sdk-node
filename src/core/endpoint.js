const CompositePath = require('../path/compositePath');
const PathUtil = require('../util/pathUtil');
const HttpClientException = require('../exception/httpClientException');
const { extractStrings } = require('../util/arrayUtil');

class Endpoint extends CompositePath {
  constructor(client, parent, location = null, serializer = null) {
    super();
    this.client = client;
    this.parent = parent;
    this.location = location || this.location;
    this.serializer = serializer;
  }

  _get(query = {}, header = {}, relativeUrl = null) {
    return this.request('get', null, query, header, relativeUrl);
  }

  _post(body, query = {}, header = {}, relativeUrl = null) {
    return this.request('post', body, query, header, relativeUrl);
  }

  _put(body, query = {}, header = {}, relativeUrl = null) {
    return this.request('put', body, query, header, relativeUrl);
  }

  _patch(body, query = {}, header = {}, relativeUrl = null) {
    return this.request('patch', body, query, header, relativeUrl);
  }

  _delete(query = {}, header = {}, relativeUrl = null) {
    return this.request('delete', null, query, header, relativeUrl);
  }

  _head(query = {}, header = {}, relativeUrl = null) {
    return this.request('head', null, query, header, relativeUrl);
  }

  async request(method, body, query = {}, header = {}, relativeUrl = null) {
    try {
      return await this.client.request(
        method.toUpperCase(),
        relativeUrl ? this.joinPath(relativeUrl) : this.getPath(),
        body,
        query,
        header,
        this.serializer
      );
    } catch (e) {
      if (e instanceof HttpClientException) {
        const errorsSanitized = this.sanitizeErrorMessage(e.getResponse());
        this.exceptionThrown(
          new HttpClientException(
            `response message: ${JSON.stringify(errorsSanitized.join(' | '))} (status code: ${e.getCode()})`,
            e.getCode(),
            e,
            e.getResponse(),
            null,
            null,
            errorsSanitized
          )
        );
      } else {
        this.exceptionThrown(e);
      }
    }
  }

  getParent() {
    return this.parent;
  }

  setParent(parent) {
    this.parent = parent;
  }

  getPath() {
    return this.getParent().joinPath(this.location);
  }

  joinPath(relative) {
    return [this.getPath(), relative.replace(new RegExp(`^${PathUtil.PATH_SEPARATOR}`), '')].join(PathUtil.PATH_SEPARATOR);
  }

  static make(client, parent, location = null, serializer = null) {
    return new this(client, parent, location, serializer);
  }

  exceptionThrown(e) {
    throw e;
  }

  sanitizeErrorMessage(response) {
    let responseData = response.getParsedPath('message');

    if (typeof responseData === 'string') {
      return [responseData];
    }

    if (Array.isArray(responseData)) {
      return extractStrings(responseData);
    }

    responseData = response.getParsedPath('error');

    if (Array.isArray(responseData)) {
      return extractStrings(responseData);
    }

    responseData = response.getParsedPath('data');

    if (Array.isArray(responseData)) {
      return extractStrings(responseData);
    }

    return [];
  }
}

module.exports = Endpoint;
