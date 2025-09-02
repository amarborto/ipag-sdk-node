const Endpoint = require('../core/endpoint');
const PaymentMethod = require('../model/paymentMethod');

class EstablishmentPaymentMethodsEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/v2/establishments';
    }

    config(paymentMethod, establishmentUuid) {
        const paymentMethodData = paymentMethod instanceof PaymentMethod ? paymentMethod.jsonSerialize() : paymentMethod;
        return this._post(paymentMethodData, {}, {}, `/${establishmentUuid}/payment_methods`);
    }
}

module.exports = EstablishmentPaymentMethodsEndpoint;
