const Model = require('../../../model/model');
const RedShieldCredentials = require('../../credentials/antifraudes/redShieldCredentials');

class RedShieldProvider extends Model {
    constructor(data) {
        super({
            name: 'redshield',
            credentials: new RedShieldCredentials(data)
        });
    }
}

module.exports = RedShieldProvider;
