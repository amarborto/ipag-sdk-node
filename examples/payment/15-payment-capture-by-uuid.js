const ipagClient = require('../config');

const transactionUuid = '4c56ff4ce4aaf9573aa5dff913df997a';

ipagClient.payment().captureByUuid(transactionUuid, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
