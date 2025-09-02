const Endpoint = require('../core/endpoint');
const Checkout = require('../model/checkout');

class CheckoutEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/checkout';
    }

    create(checkout) {
        const checkoutData = checkout instanceof Checkout ? checkout.jsonSerialize() : checkout;
        return this._post(checkoutData);
    }
}

module.exports = CheckoutEndpoint;