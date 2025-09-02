const Model = require('./model');
const Card = require('./card');
const Holder = require('./holder');

class Token extends Model {
  constructor(data) {
    super(data);
    if (this.card) {
      this.card = new Card(this.card);
    }
    if (this.holder) {
      this.holder = new Holder(this.holder);
    }
  }
}

module.exports = Token;
