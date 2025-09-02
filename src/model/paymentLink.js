const Model = require('./model');
const Buttons = require('./buttons');
const CheckoutSettings = require('./checkoutSettings');

class PaymentLink extends Model {
  constructor(data) {
    super(data);
    if (this.buttons) {
      this.buttons = new Buttons(this.buttons);
    }
    if (this.checkout_settings) {
      this.checkout_settings = new CheckoutSettings(this.checkout_settings);
    }
  }
}

module.exports = PaymentLink;
