const Endpoint = require('../core/endpoint');
const Antifraud = require('../model/antifraud');

class EstablishmentAntifraudEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/v2/establishments';
    }

    config(antifraud, establishmentUuid) {
        const antifraudData = antifraud instanceof Antifraud ? antifraud.jsonSerialize() : antifraud;
        return this._post(antifraudData, {}, {}, `/${establishmentUuid}/antifraud_settings`);
    }
}

module.exports = EstablishmentAntifraudEndpoint;
