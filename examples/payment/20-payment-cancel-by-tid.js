const ipagClient = require('../config');

const transactionTid = 'b1c875a8bd263903c24d0b45751bdfba';

ipagClient.payment().cancelByTid(transactionTid, 50.00)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
