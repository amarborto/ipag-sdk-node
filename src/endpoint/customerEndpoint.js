const Endpoint = require('../core/endpoint');
const Customer = require('../model/customer');

class CustomerEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/customers';
    }

    create(customer) {
        const customerData = customer instanceof Customer ? customer.jsonSerialize() : customer;
        return this._post(customerData);
    }

    update(customer, id) {
        const customerData = customer instanceof Customer ? customer.jsonSerialize() : customer;
        return this._put(customerData, { id });
    }

    get(id) {
        return this._get({ id });
    }

    delete(id) {
        return this._delete({ id });
    }

    list(filters = {}) {
        return this._get(filters);
    }
}

module.exports = CustomerEndpoint;