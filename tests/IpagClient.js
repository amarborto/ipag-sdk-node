const { IpagClient, IpagEnvironment } = require('../index');
const HttpClient = require('../src/http/client/httpClient');
const HttpException = require('../src/exception/httpException');

class MockHttpClient extends HttpClient {
    constructor(responses) {
        super();
        this.responses = responses;
        this.requestCount = 0;
        this._lastResponseHeaders = {};
        this._lastResponseStatusCode = 200;
    }

    async request(method, url, body, query, header) {
        const response = this.responses[this.requestCount];
        this.requestCount++;
        this._lastResponseStatusCode = response.status;
        
        if (response.status >= 400) {
            const Response = require('../src/http/response');
            const responseObj = Response.from(
                JSON.stringify(response.data),
                this._lastResponseHeaders,
                response.status
            );
            const httpException = new HttpException(
                response.data.message || 'HTTP Error',
                response.status,
                null,
                responseObj
            );
            throw httpException;
        }
        return JSON.stringify(response.data);
    }

    lastResponseHeaders() {
        return this._lastResponseHeaders;
    }

    lastResponseStatusCode() {
        return this._lastResponseStatusCode;
    }
}

const instanceClient = (responses) => {
    const client = new IpagClient('test', 'AAA-AAAAAA-AAAAAAA-AAAAAAAAA-AAAA', IpagEnvironment.LOCAL);
    client.httpClient = new MockHttpClient(responses);
    return client;
};

module.exports = { instanceClient };
