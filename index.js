const IpagClient = require('./src/core/ipagClient');
const IpagEnvironment = require('./src/core/ipagEnvironment');
const models = require('./src/model');
const enums = require('./src/core/enums');

module.exports = {
  IpagClient,
  IpagEnvironment,
  ...models,
  ...enums,
};