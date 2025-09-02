const ipagClient = require('../config');

const transactionTid = 'ed69ef702845675e57e06fd8420a1d0e';

ipagClient.payment().getByTid(transactionTid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
