const ipagClient = require('../config');

const subscriptionId = 42;
const invoiceNumber = 1;

ipagClient.subscription().scheduleInstallmentPayment(subscriptionId, invoiceNumber)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
