const Environment = require('./environment');

const VERSION = '2';
const LOCAL = 'api.ipag.test';
const PRODUCTION = 'https://api.ipag.com.br';
const SANDBOX = 'https://sandbox.ipag.com.br';

class IpagEnvironment extends Environment {
  constructor(environment) {
    if (!IpagEnvironment.isValidEnv(environment)) {
      throw new Error("The environment must be valid");
    }
    super(environment);
  }

  static isValidEnv(value) {
    return value === LOCAL || value === SANDBOX || value === PRODUCTION;
  }
}

IpagEnvironment.VERSION = VERSION;
IpagEnvironment.LOCAL = LOCAL;
IpagEnvironment.PRODUCTION = PRODUCTION;
IpagEnvironment.SANDBOX = SANDBOX;

module.exports = IpagEnvironment;
