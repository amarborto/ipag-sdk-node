const ipagClient = require('../config');

const transactionId = 139;

ipagClient.splitRules().list(transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
