const Model = require('./model');
const Customer = require('./customer');
const InstallmentSetting = require('./installmentSetting');
const Order = require('./order');
const Product = require('./product');
const SplitRules = require('./splitRules');

class Checkout extends Model {
  constructor(data) {
    super(data);
    if (this.customer) {
      this.customer = new Customer(this.customer);
    }
    if (this.installment_setting) {
      this.installment_setting = new InstallmentSetting(this.installment_setting);
    }
    if (this.order) {
      this.order = new Order(this.order);
    }
    if (this.products) {
      this.products = this.products.map(p => new Product(p));
    }
    if (this.split_rules) {
      this.split_rules = this.split_rules.map(s => new SplitRules(s));
    }
  }
}

module.exports = Checkout;
