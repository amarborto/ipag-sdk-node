const ipagClient = require('../config');

const customerId = 100003;

ipagClient.customer().delete(customerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
