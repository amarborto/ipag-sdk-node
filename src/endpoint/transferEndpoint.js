const Endpoint = require('../core/endpoint');
const SellerTransferEndpoint = require('./sellerTransferEndpoint');
const FutureTransferEndpoint = require('./futureTransferEndpoint');

class TransferEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/transfers';
    }

    list(filters = {}) {
        return this._get(filters);
    }

    get(id) {
        return this._get({ id });
    }

    seller() {
        return new SellerTransferEndpoint(this.client, this.parent);
    }

    future() {
        return new FutureTransferEndpoint(this.client, this.parent);
    }
}

module.exports = TransferEndpoint;