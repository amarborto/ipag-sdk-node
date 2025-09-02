const ipagClient = require('../config');

ipagClient.customer().list({ name: 'Bruce' })
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
