const BaseException = require('./baseException');

class HttpException extends BaseException {
  constructor(message, code, previous, response, statusCode, statusMessage, errors) {
    super(message, previous);
    this.code = code;
    this.response = response;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.errors = errors;
  }

  getResponse() {
    return this.response;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getStatusMessage() {
    return this.statusMessage;
  }

  getErrors() {
    return this.errors;
  }

  getCode() {
    return this.code;
  }
}

module.exports = HttpException;
