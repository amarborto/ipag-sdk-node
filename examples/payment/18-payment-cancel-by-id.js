const ipagClient = require('../config');

const transactionId = 115;

ipagClient.payment().cancelById(transactionId, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
