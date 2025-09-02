class BaseHttpClient {
  request(method, url, body, query, header) {
    throw new Error('Not implemented');
  }

  lastResponseHeaders() {
    throw new Error('Not implemented');
  }

  lastResponseStatusCode() {
    throw new Error('Not implemented');
  }
}

module.exports = BaseHttpClient;
