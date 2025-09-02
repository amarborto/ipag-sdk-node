const ipagClient = require('../config');

const customerId = 100001;

ipagClient.customer().get(customerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
