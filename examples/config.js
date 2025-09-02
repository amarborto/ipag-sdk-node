const { IpagClient, IpagEnvironment } = require('../index');

const ipagClient = new IpagClient('apiID', 'apiKey', IpagEnvironment.SANDBOX);

module.exports = ipagClient;
