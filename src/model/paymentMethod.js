const Model = require('./model');

class PaymentMethod extends Model {
    constructor(data) {
        super(data);
    }

    jsonSerialize() {
        const data = super.jsonSerialize();

        if (data.credentials && typeof data.credentials.jsonSerialize === 'function') {
            data.credentials = data.credentials.jsonSerialize();
        }

        return data;
    }
}

module.exports = PaymentMethod;
