const ipagClient = require('../config');

const tokenValue = '552af952-e189-45d5-b974-e5bb87385e01';

ipagClient.token().get(tokenValue)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
