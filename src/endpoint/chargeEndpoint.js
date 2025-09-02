const Endpoint = require('../core/endpoint');
const Charge = require('../model/charge');

class ChargeEndpoint extends Endpoint {
  constructor(client, parent) {
    super(client, parent);
    this.location = '/service/resources/charges';
  }

  create(charge) {
    const chargeData = charge instanceof Charge ? charge.jsonSerialize() : charge;
    return this._post(chargeData);
  }

  update(charge, id) {
    const chargeData = charge instanceof Charge ? charge.jsonSerialize() : charge;
    return this._put(chargeData, { id });
  }

  get(id) {
    return this._get({ id });
  }

  list(filters = {}) {
    return this._get(filters);
  }
}

module.exports = ChargeEndpoint;