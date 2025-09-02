const ipagClient = require('../config');

const orderId = '114';

ipagClient.payment().captureByOrderId(orderId, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
