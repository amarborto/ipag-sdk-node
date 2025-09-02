const ipagClient = require('../config');
const { PaymentTransaction, PaymentTypes, Cards } = require('../../index');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '123456789',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 3,
        capture: true,
        fraud_analysis: true,
        card: {
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
    },
    event: {
        name: 'Reveillon - 2024',
        date: '2024-01-01 00:00:00',
        type: 'party',
        subtype: 'Reveillon',
        venue: {
            name: 'Campo - Clube das Laranjeiras',
            capacity: 2000,
            address: 'Av. Santos Dumont',
            city: 'São Paulo',
            state: 'SP'
        },
        tickets: [
            {
                id: 'EVENT001',
                category: 'regular',
                premium: false,
                section: 'Pista',
                attendee: {
                    document: '972.089.620-57',
                    dob: '1990-10-28'
                }
            },
            {
                id: 'EVENT002',
                category: 'regular',
                premium: true,
                section: 'Camarote',
                attendee: {
                    document: '444.631.330-41',
                    dob: '1992-03-28'
                }
            }
        ]
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
