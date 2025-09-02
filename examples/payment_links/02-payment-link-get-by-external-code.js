const ipagClient = require('../config');

const paymentExternalCode = 6;

ipagClient.paymentLinks().getByExternalCode(paymentExternalCode)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
