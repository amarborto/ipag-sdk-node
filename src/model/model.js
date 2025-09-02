class Model {
  constructor(data = {}) {
    Object.assign(this, data);
  }

  jsonSerialize() {
    const serialized = {};
    for (const key in this) {
      if (typeof this[key] !== 'function') {
        if (this[key] instanceof Model) {
          serialized[key] = this[key].jsonSerialize();
        } else if (Array.isArray(this[key])) {
          serialized[key] = this[key].map(item => item instanceof Model ? item.jsonSerialize() : item);
        } else {
          serialized[key] = this[key];
        }
      }
    }
    return serialized;
  }

  static parse(data) {
    return new this(data);
  }

  static tryParse(data) {
    try {
      return this.parse(data);
    } catch (e) {
      return null;
    }
  }
}

module.exports = Model;
