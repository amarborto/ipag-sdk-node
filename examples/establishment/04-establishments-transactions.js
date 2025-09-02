const ipagClient = require('../config');

ipagClient.establishment().transaction().list()
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
