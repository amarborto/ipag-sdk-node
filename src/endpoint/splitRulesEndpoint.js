const Endpoint = require('../core/endpoint');
const SplitRules = require('../model/splitRules');

class SplitRulesEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/split_rules';
    }

    create(splitRules, transaction_id) {
        const splitRulesData = splitRules instanceof SplitRules ? splitRules.jsonSerialize() : splitRules;
        return this._post(splitRulesData, { transaction: transaction_id });
    }

    get(split_rule_id, transaction_id) {
        return this._get({ id: split_rule_id, transaction: transaction_id });
    }

    list(transaction_id) {
        return this._get({ transaction: transaction_id });
    }

    delete(split_rule_id, transaction_id) {
        return this._delete({ id: split_rule_id, transaction: transaction_id });
    }
}

module.exports = SplitRulesEndpoint;