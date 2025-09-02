const axios = require('axios');
const BaseHttpClient = require('./baseHttpClient');
const HttpClientException = require('../../exception/httpClientException');
const HttpServerException = require('../../exception/httpServerException');
const HttpTransferException = require('../../exception/httpTransferException');
const Response = require('../response');

const DEFAULT_USER_AGENT = 'IPag SDK for Node.js';

class HttpClient extends BaseHttpClient {
  constructor(config = {}) {
    super();
    const defaultConfig = {
      timeout: 60000,
      headers: {
        'User-Agent': DEFAULT_USER_AGENT,
        ...config.headers,
      },
      auth: config.auth,
    };
    this.client = axios.create(defaultConfig);
    this._lastResponseHeaders = null;
    this._lastResponseStatusCode = null;
  }

  async request(method, url, body, query = {}, header = {}) {
    try {
      const response = await this.client.request({
        method,
        url,
        data: body,
        params: query,
        headers: header,
      });

      this._lastResponseHeaders = response.headers;
      this._lastResponseStatusCode = response.status;

      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, statusText, headers, data } = error.response;
        const response = new Response(data, headers, status);

        if (status >= 500) {
          throw new HttpServerException(
            `An server-side error ocurred with status ${status} from ${url}`,
            error.code,
            error,
            response,
            status,
            statusText
          );
        } else {
          throw new HttpClientException(
            `An client-side error ocurred with status ${status} from ${url}`,
            error.code,
            error,
            response,
            status,
            statusText
          );
        }
      } else if (error.request) {
        throw new HttpTransferException(
          `An networking error ocurred while trying to connect to ${url}`,
          error.code,
          error
        );
      } else {
        throw error;
      }
    }
  }

  lastResponseHeaders() {
    return this._lastResponseHeaders;
  }

  lastResponseStatusCode() {
    return this._lastResponseStatusCode;
  }
}

module.exports = HttpClient;
