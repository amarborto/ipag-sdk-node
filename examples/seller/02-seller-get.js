const ipagClient = require('../config');

const sellerId = 100022;

ipagClient.seller().get(sellerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
