const Endpoint = require('../core/endpoint');
const Token = require('../model/token');

class TokenEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/card_tokens';
    }

    create(token) {
        const tokenData = token instanceof Token ? token.jsonSerialize() : token;
        return this._post(tokenData);
    }

    get(token) {
        return this._get({ token });
    }
}

module.exports = TokenEndpoint;