const ipagClient = require('../config');

const sellerCpf = '85450844042';

ipagClient.transfer().future().listBySellerCpfCnpj(sellerCpf)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
