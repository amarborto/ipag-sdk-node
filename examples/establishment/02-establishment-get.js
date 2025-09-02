const ipagClient = require('../config');

const establishmentUuid = '8a8eac8eaeca4d75f0cafc20319c06af';

ipagClient.establishment().get(establishmentUuid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
