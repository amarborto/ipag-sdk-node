const ipagClient = require('../config');
const { Charge } = require('../../index');

const charge = new Charge({
    amount: 100,
    description: 'Cobrança referente a negociação de débito pendente na Empresa X',
    due_date: '2020-10-30',
    frequency: 1,
    interval: 'month',
    type: 'charge',
    last_charge_date: '2020-10-30',
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    auto_debit: false,
    installments: 12,
    is_active: true,
    products: [2],
    customer: {
        name: 'Arthur Morgan',
    },
    checkout_settings: {
        max_installments: 12,
    }
});

const chargeId = 1;

ipagClient.charge().update(charge, chargeId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
