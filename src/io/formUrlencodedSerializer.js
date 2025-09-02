const Serializer = require('./serializer');

class FormUrlencodedSerializer extends Serializer {
  serialize(data) {
    const params = new URLSearchParams();
    for (const key in data) {
      if (Array.isArray(data[key])) {
        for (const value of data[key]) {
          params.append(`${key}[]`, value);
        }
      } else {
        params.append(key, data[key]);
      }
    }
    return params.toString();
  }

  unserialize(data) {
    const result = {};
    const params = new URLSearchParams(data);
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }
    return result;
  }

  getContentType() {
    return 'application/x-www-form-urlencoded';
  }
}

module.exports = FormUrlencodedSerializer;
