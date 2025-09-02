const ipagClient = require('../config');

const webhookId = 7;

ipagClient.webhook().delete(webhookId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
