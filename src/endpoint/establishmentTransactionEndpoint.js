const Endpoint = require('../core/endpoint');

class EstablishmentTransactionEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/v2/establishments';
    }

    list(filters = {}) {
        return this._get(filters, {}, '/transactions');
    }

    listByEstablishment(uuid, filters = {}) {
        return this._get(filters, {}, `/${uuid}/transactions`);
    }

    getByEstablishment(uuid, transactionUuid) {
        return this._get({}, {}, `/${uuid}/transactions/${transactionUuid}`);
    }
}

module.exports = EstablishmentTransactionEndpoint;
