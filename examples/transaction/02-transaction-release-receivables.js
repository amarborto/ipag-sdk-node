const ipagClient = require('../config');

const transactionId = 1;
const sellerId = 100002;

ipagClient.transaction().releaseReceivables(sellerId, transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
