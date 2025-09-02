const ipagClient = require('../config');

const subscriptionId = 45;

ipagClient.subscription().unlinkToken(subscriptionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
