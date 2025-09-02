const Endpoint = require('../core/endpoint');
const EstablishmentTransactionEndpoint = require('./establishmentTransactionEndpoint');
const EstablishmentPaymentMethodsEndpoint = require('./establishmentPaymentMethodsEndpoint');
const EstablishmentAntifraudEndpoint = require('./establishmentAntifraudEndpoint');
const Establishment = require('../model/establishment');

class EstablishmentEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/establishments';
    }

    create(establishment) {
        const establishmentData = establishment instanceof Establishment ? establishment.jsonSerialize() : establishment;
        return this._post(establishmentData);
    }

    update(establishment, uuid) {
        const establishmentData = establishment instanceof Establishment ? establishment.jsonSerialize() : establishment;
        return this._put(establishmentData, { id: uuid });
    }

    get(uuid) {
        return this._get({ id: uuid });
    }

    list(filters = {}) {
        return this._get(filters);
    }

    transaction() {
        return new EstablishmentTransactionEndpoint(this.client, this.parent);
    }

    paymentMethods() {
        return new EstablishmentPaymentMethodsEndpoint(this.client, this.parent);
    }

    antifraud() {
        return new EstablishmentAntifraudEndpoint(this.client, this.parent);
    }
}

module.exports = EstablishmentEndpoint;