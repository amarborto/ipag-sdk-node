const ipagClient = require('../config');
const { PaymentTransaction, PaymentTypes } = require('../../index');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    payment: {
        type: PaymentTypes.CARD,
        installments: 2,
        card: {
            token: '552af952-e189-45d5-b974-e5bb87385e01'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30',
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
