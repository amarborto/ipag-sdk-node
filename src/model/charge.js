const Model = require('./model');
const Customer = require('./customer');
const CheckoutSettings = require('./checkoutSettings');

class Charge extends Model {
  constructor(data) {
    super(data);
    if (this.customer) {
      this.customer = new Customer(this.customer);
    }
    if (this.checkout_settings) {
      this.checkout_settings = new CheckoutSettings(this.checkout_settings);
    }
  }
}

module.exports = Charge;
