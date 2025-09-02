const Endpoint = require('../core/endpoint');
const Voucher = require('../model/voucher');

class VoucherEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/vouchers';
    }

    create(voucher) {
        const voucherData = voucher instanceof Voucher ? voucher.jsonSerialize() : voucher;
        return this._post(voucherData);
    }
}

module.exports = VoucherEndpoint;