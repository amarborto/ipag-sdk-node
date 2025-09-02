const ipagClient = require('../config');

const transactionUuid = '202cb962ac59075b964b07152d234b70';

ipagClient.payment().getByUuid(transactionUuid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
