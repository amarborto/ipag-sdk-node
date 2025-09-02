const ipagClient = require('../config');

const establishmentUuid = '8a8eac8eaeca4d75f0cafc20319c06af';
const transactionUuid = 'a97da629b098b75c294dffdc3e463904';

ipagClient.establishment().transaction().getByEstablishment(establishmentUuid, transactionUuid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
