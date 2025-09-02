const ipagClient = require('../config');

const chargeId = 1;

ipagClient.charge().get(chargeId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
