const Endpoint = require('../core/endpoint');
const Seller = require('../model/seller');

class SellerEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/sellers';
    }

    create(seller) {
        const sellerData = seller instanceof Seller ? seller.jsonSerialize() : seller;
        return this._post(sellerData);
    }

    update(seller, id) {
        const sellerData = seller instanceof Seller ? seller.jsonSerialize() : seller;
        return this._put(sellerData, { id });
    }

    get(id) {
        return this._get({ id });
    }

    list(filters = {}) {
        return this._get(filters);
    }
}

module.exports = SellerEndpoint;