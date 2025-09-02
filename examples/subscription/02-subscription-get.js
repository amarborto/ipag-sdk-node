const ipagClient = require('../config');

const subscriptionId = 44;

ipagClient.subscription().get(subscriptionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
