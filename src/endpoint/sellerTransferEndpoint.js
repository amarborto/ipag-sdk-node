const Endpoint = require('../core/endpoint');

class SellerTransferEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/sellers_transfers';
    }

    list(filters = {}) {
        return this._get(filters);
    }

    get(id) {
        return this._get({ id });
    }
}

module.exports = SellerTransferEndpoint;
