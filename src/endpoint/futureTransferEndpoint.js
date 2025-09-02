const Endpoint = require('../core/endpoint');

class FutureTransferEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/future_transfers';
    }

    list(filters = {}) {
        return this._get(filters);
    }

    listBySellerId(sellerId) {
        return this._get({ seller_id: sellerId });
    }

    listBySellerCpfCnpj(sellerCpfCnpj) {
        return this._get({ cpf_cnpj: sellerCpfCnpj });
    }
}

module.exports = FutureTransferEndpoint;
