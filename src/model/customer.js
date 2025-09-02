const Model = require('./model');
const Address = require('./address');

class Customer extends Model {
  constructor(data) {
    super(data);
    if (this.address) {
      this.address = new Address(this.address);
    }
    if (this.billing_address) {
      this.billing_address = new Address(this.billing_address);
    }
    if (this.shipping_address) {
      this.shipping_address = new Address(this.shipping_address);
    }
  }
}

module.exports = Customer;
