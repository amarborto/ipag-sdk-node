const ipagClient = require('../config');

const subscriptionId = 45;
const invoiceNumber = 1;

ipagClient.subscription().payOffInstallment(subscriptionId, invoiceNumber)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
