const Model = require('../../../model/model');
const KondutoCredentials = require('../../credentials/antifraudes/kondutoCredentials');

class KondutoProvider extends Model {
    constructor(data) {
        super({
            name: 'konduto',
            credentials: new KondutoCredentials(data)
        });
    }
}

module.exports = KondutoProvider;
