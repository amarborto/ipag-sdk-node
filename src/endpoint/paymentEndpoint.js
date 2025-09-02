const Endpoint = require('../core/endpoint');
const PaymentTransaction = require('../model/paymentTransaction');

class PaymentEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service';
    }

    create(paymentTransaction) {
        const paymentTransactionData = paymentTransaction instanceof PaymentTransaction ? paymentTransaction.jsonSerialize() : paymentTransaction;
        return this._post(paymentTransactionData, {}, {}, '/payment');
    }

    getById(id) {
        return this._get({ id }, {}, '/consult');
    }

    getByUuid(uuid) {
        return this._get({ uuid }, {}, '/consult');
    }

    getByTid(tid) {
        return this._get({ tid }, {}, '/consult');
    }

    getByOrderId(orderId) {
        return this._get({ order_id: orderId }, {}, '/consult');
    }

    captureById(id, amount = null) {
        return this._post({}, { id, amount }, {}, '/capture');
    }

    captureByUuid(uuid, amount = null) {
        return this._post({}, { uuid, amount }, {}, '/capture');
    }

    captureByTid(tid, amount = null) {
        return this._post({}, { tid, amount }, {}, '/capture');
    }

    captureByOrderId(order_id, amount = null) {
        return this._post({}, { order_id, amount }, {}, '/capture');
    }

    cancelById(id, amount = null) {
        return this._post({}, { id, amount }, {}, '/cancel');
    }

    cancelByUuid(uuid, amount = null) {
        return this._post({}, { uuid, amount }, {}, '/cancel');
    }

    cancelByTid(tid, amount = null) {
        return this._post({}, { tid, amount }, {}, '/cancel');
    }

    cancelByOrderId(order_id, amount = null) {
        return this._post({}, { order_id, amount }, {}, '/cancel');
    }
}

module.exports = PaymentEndpoint;