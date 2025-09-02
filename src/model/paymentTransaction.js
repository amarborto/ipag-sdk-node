const Model = require('./model');
const PaymentAntifraud = require('./paymentAntifraud');
const Payment = require('./payment');
const Customer = require('./customer');
const Product = require('./product');
const PaymentSubscription = require('./paymentSubscription');
const PaymentSplitRules = require('./paymentSplitRules');
const Event = require('./event');

class PaymentTransaction extends Model {
  constructor(data) {
    super(data);
    if (this.antifraud) {
      this.antifraud = new PaymentAntifraud(this.antifraud);
    }
    if (this.payment) {
      this.payment = new Payment(this.payment);
    }
    if (this.customer) {
      this.customer = new Customer(this.customer);
    }
    if (this.products) {
      this.products = this.products.map(p => new Product(p));
    }
    if (this.subscription) {
      this.subscription = new PaymentSubscription(this.subscription);
    }
    if (this.split_rules) {
      this.split_rules = this.split_rules.map(s => new PaymentSplitRules(s));
    }
    if (this.event) {
      this.event = new Event(this.event);
    }
  }
}

module.exports = PaymentTransaction;
