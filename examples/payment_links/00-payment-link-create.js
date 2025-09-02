const ipagClient = require('../config');
const { PaymentLink } = require('../../index');

const paymentLink = new PaymentLink({
    externalCode: '150',
    amount: 0,
    description: 'Link para doação',
    expireAt: '2023-12-30 23:00:00',
    buttons: {
        enable: true,
        one: 5,
        two: 10,
        three: 15
    },
    checkout_settings: {
        max_installments: 12,
        interest_free_installments: 12,
        min_installment_value: 0.00,
        interest: 0.00,
        payment_method: 'all'
    },
});

ipagClient.paymentLinks().create(paymentLink)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
