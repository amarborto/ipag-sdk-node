const ipagClient = require('../config');
const { PaymentMethod, Acquirer } = require('../../index');
const { StoneCredentials } = require('../../support/credentials/paymentMethods');

const paymentMethod = new PaymentMethod({
    acquirer: Acquirer.STONE,
    priority: 100,
    environment: 'test',
    capture: true,
    retry: true,
    credentials: new StoneCredentials({
        stone_code: 'xxxxx',
        stone_sak: 'xxxxxx'
    }).jsonSerialize(),
});

const establishmentUuid = 'bb36c34eb6644ab9694315af7d68e629';

ipagClient.establishment().paymentMethods().config(paymentMethod, establishmentUuid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
