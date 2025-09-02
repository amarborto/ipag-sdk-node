const Model = require('../../../../model/model');
const ClearSaleCredentials = require('../../credentials/antifraudes/clearSaleCredentials');

class ClearSaleProvider extends Model {
    constructor(data) {
        super({
            name: 'clearsale',
            credentials: new ClearSaleCredentials(data)
        });
    }
}

module.exports = ClearSaleProvider;
