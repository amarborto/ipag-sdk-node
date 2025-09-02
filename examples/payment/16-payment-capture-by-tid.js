const ipagClient = require('../config');

const transactionTid = 'fe79b3038e158b6e8802da5a31a557ad';

ipagClient.payment().captureByTid(transactionTid, 50.0)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
