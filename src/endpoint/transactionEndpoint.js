const Endpoint = require('../core/endpoint');

class TransactionEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/transactions';
    }

    get(id) {
        return this._get({ id });
    }

    list(filters = {}) {
        return this._get(filters);
    }

    releaseReceivables(sellerId, transactionId) {
        return this._post({ seller_id: sellerId, transaction_id: transactionId });
    }
}

module.exports = TransactionEndpoint;