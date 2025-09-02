const ipagClient = require('../config');

const paymentLinkId = 6;

ipagClient.paymentLinks().getById(paymentLinkId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
