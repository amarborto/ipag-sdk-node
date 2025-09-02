const Endpoint = require('../core/endpoint');
const SubscriptionPlan = require('../model/subscriptionPlan');

class SubscriptionPlanEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/plans';
    }

    create(subscriptionPlan) {
        const subscriptionPlanData = subscriptionPlan instanceof SubscriptionPlan ? subscriptionPlan.jsonSerialize() : subscriptionPlan;
        return this._post(subscriptionPlanData);
    }

    update(subscriptionPlan, id) {
        const subscriptionPlanData = subscriptionPlan instanceof SubscriptionPlan ? subscriptionPlan.jsonSerialize() : subscriptionPlan;
        return this._put(subscriptionPlanData, { id });
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

module.exports = SubscriptionPlanEndpoint;