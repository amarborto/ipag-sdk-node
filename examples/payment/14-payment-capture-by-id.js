const ipagClient = require('../config');

const transactionId = 123;

ipagClient.payment().captureById(transactionId, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
