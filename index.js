const IpagClient = require('./src/core/ipagClient');
const IpagEnvironment = require('./src/core/ipagEnvironment');
const models = require('./src/model');

module.exports = {
  IpagClient,
  IpagEnvironment,
  ...models,
};