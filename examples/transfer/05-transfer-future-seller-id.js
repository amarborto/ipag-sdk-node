const ipagClient = require('../config');

const sellerId = 100024;

ipagClient.transfer().future().listBySellerId(sellerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
