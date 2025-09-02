const ipagClient = require('../config');

const transactionId = 123;

ipagClient.payment().getById(transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
