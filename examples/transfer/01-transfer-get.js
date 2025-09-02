const ipagClient = require('../config');

const transferId = 1;

ipagClient.transfer().get(transferId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
