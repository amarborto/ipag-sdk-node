const ipagClient = require('../config');

const orderId = '129';

ipagClient.payment().getByOrderId(orderId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
