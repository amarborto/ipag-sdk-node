const Model = require('./model');
const Trial = require('./trial');

class SubscriptionPlan extends Model {
  constructor(data) {
    super(data);
    if (this.trial) {
      this.trial = new Trial(this.trial);
    }
  }
}

module.exports = SubscriptionPlan;
