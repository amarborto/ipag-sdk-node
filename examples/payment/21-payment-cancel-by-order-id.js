const ipagClient = require('../config');

const orderId = 124;

ipagClient.payment().cancelByOrderId(orderId, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
