const { IpagClient, IpagEnvironment } = require('../index');
const HttpClient = require('../src/http/client/httpClient');

class MockHttpClient extends HttpClient {
    constructor(responses) {
        super();
        this.responses = responses;
        this.requestCount = 0;
    }

    async request(method, url, body, query, header) {
        const response = this.responses[this.requestCount];
        this.requestCount++;
        if (response.status >= 400) {
            const error = new Error(response.data.message);
            error.response = response;
            throw error;
        }
        return response.data;
    }
}

const instanceClient = (responses) => {
    const client = new IpagClient('test', 'AAA-AAAAAA-AAAAAAA-AAAAAAAAA-AAAA', IpagEnvironment.LOCAL);
    client.httpClient = new MockHttpClient(responses);
    return client;
};

module.exports = { instanceClient };
