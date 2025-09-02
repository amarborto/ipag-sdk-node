const Model = require('./model');
const Order = require('./order');
const Seller = require('./seller');
const Customer = require('./customer');

class Voucher extends Model {
  constructor(data) {
    super(data);
    if (this.order) {
      this.order = new Order(this.order);
    }
    if (this.seller) {
      this.seller = new Seller(this.seller);
    }
    if (this.customer) {
      this.customer = new Customer(this.customer);
    }
  }
}

module.exports = Voucher;
