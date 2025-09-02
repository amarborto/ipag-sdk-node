const Model = require('./model');
const Address = require('./address');
const Owner = require('./owner');
const Bank = require('./bank');

class Seller extends Model {
  constructor(data) {
    super(data);
    if (this.address) {
      this.address = new Address(this.address);
    }
    if (this.owner) {
      this.owner = new Owner(this.owner);
    }
    if (this.bank) {
      this.bank = new Bank(this.bank);
    }
  }
}

module.exports = Seller;
