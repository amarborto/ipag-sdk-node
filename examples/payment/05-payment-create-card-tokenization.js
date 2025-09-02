const ipagClient = require('../config');
const { PaymentTransaction, PaymentTypes, Cards } = require('../../index');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 2,
        card: {
            tokenize: true,
            holder: 'Bruce Wayne',
            number: '4111111111111111',
            expiry_month: '01',
            expiry_year: '2025',
            cvv: '123'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
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
