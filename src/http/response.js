const ArrayUtil = require('../../util/arrayUtil');

class Response {
  constructor(body, headers, statusCode) {
    this.raw = body;
    this.serializer = null;
    this.data = null;
    this.headers = headers;
    this.statusCode = statusCode;
  }

  unSerialize() {
    if (this.raw && typeof this.raw === 'string') {
        try {
            this.data = JSON.parse(this.raw);
        } catch (e) {
            this.data = { data: this.raw };
        }
    } else if (this.raw) {
        this.data = this.raw;
    } else {
        this.data = null;
    }

    if (this.serializer) {
        this.data = this.serializer.unserialize(this.raw);
    }

    return this;
  }

  getParsed() {
    this.unSerialize();
    return {
      data: this.data,
      headers: this.headers,
      statusCode: this.statusCode,
    };
  }

  getParsedPath(dotNotation, defaultValue = null) {
    return ArrayUtil.get(`data.${dotNotation}`, this.getParsed(), defaultValue);
  }

  getBody() {
    return this.raw;
  }

  getHeaders() {
    return this.headers;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getData() {
    return this.data;
  }

  setSerializer(serializer) {
    this.serializer = serializer;
  }

  static from(data, headers = null, statusCode = null) {
    return new Response(data, headers, statusCode);
  }
}

module.exports = Response;