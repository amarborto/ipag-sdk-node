const ipagClient = require('../config');

const transactionUuid = '5fd0b37cd7dbbb00f97ba6ce92bf5add';

ipagClient.payment().cancelByUuid(transactionUuid, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
