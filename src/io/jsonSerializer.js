const Serializer = require('./serializer');
const ParseException = require('../exception/parseException');

class JsonSerializer extends Serializer {
  constructor() {
    super();
  }

  serialize(data) {
    try {
      return JSON.stringify(data);
    } catch (e) {
      throw new ParseException('Serialization data is not JSON parseable.');
    }
  }

  unserialize(data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      throw new ParseException(`Received data is not JSON parseable: ${data}.`);
    }
  }

  getContentType() {
    return 'application/json';
  }
}

module.exports = JsonSerializer;