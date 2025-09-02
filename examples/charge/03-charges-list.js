const ipagClient = require('../config');

ipagClient.charge().list({ is_active: false })
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
