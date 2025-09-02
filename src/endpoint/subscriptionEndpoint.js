const Endpoint = require('../core/endpoint');
const Subscription = require('../model/subscription');

class SubscriptionEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/subscriptions';
    }

    create(subscription) {
        const subscriptionData = subscription instanceof Subscription ? subscription.jsonSerialize() : subscription;
        return this._post(subscriptionData);
    }

    update(subscription, id) {
        const subscriptionData = subscription instanceof Subscription ? subscription.jsonSerialize() : subscription;
        return this._put(subscriptionData, { id });
    }

    get(id) {
        return this._get({ id });
    }

    list(filters = {}) {
        return this._get(filters);
    }

    unlinkToken(id) {
        this.location = `/service/subscriptions/${id}/card_token`;
        return this._delete({ id });
    }

    _actionsInstallmentPayment(subscription_id, invoice_number, action) {
        this.location = '/service/resources/invoice_installments';
        return this._post(
            { subscription_id, invoice_number, action },
            { subscription_id, invoice_number, action }
        );
    }

    payOffInstallment(subscription_id, invoice_number) {
        return this._actionsInstallmentPayment(subscription_id, invoice_number, 'pay');
    }

    scheduleInstallmentPayment(subscription_id, invoice_number) {
        return this._actionsInstallmentPayment(subscription_id, invoice_number, 'schedule');
    }
}

module.exports = SubscriptionEndpoint;