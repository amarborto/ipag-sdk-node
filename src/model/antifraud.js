const Model = require('./model');
const AntifraudProvider = require('./antifraudProvider');
const AntifraudSettings = require('./antifraudSettings');

class Antifraud extends Model {
  constructor(data) {
    super(data);
    if (this.provider) {
      this.provider = new AntifraudProvider(this.provider);
    }
    if (this.settings) {
      this.settings = new AntifraudSettings(this.settings);
    }
  }
}

module.exports = Antifraud;
