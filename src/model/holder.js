const Model = require('./model');
const Address = require('./address');

class Holder extends Model {
  constructor(data) {
    super(data);
    if (this.address) {
      this.address = new Address(this.address);
    }
  }
}

module.exports = Holder;
