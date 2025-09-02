const Model = require('./model');
const Trial = require('./trial');

class PaymentSubscription extends Model {
  constructor(data) {
    super(data);
    if (this.trial) {
      this.trial = new Trial(this.trial);
    }
  }
}

module.exports = PaymentSubscription;
