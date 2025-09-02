const ipagClient = require('../config');
const { PaymentTransaction, PaymentTypes, Others } = require('../../index');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '1234567',
    payment: {
        type: PaymentTypes.PIX,
        method: Others.PIX,
        pix_expires_in: 60
    },
    customer: {
        name: 'Bruce Wayne',
        email: 'brucewayne@email.com',
        cpf_cnpj: '490.558.550-30',
        phone: '(22) 2222-33333',
        business_name: 'Wayne Enterprises',
        birthdate: '1987-02-19',
        ip: '192.168.0.1',
        billing_address: {
            street: 'Avenida Principal',
            number: '12345',
            "complement": "Sala 02",
            district: 'São Paulo',
            city: 'São Paulo',
            state: 'SP',
            zipcode: '01310-000'
        },
        shipping_address: {
            street: 'Avenida Principal',
            number: '12345',
            "complement": "Sala 02",
            district: 'São Paulo',
            city: 'São Paulo',
            state: 'SP',
            zipcode: '01310-000'
        }
    },
    products: [
        {
            name: 'Smart TV LG 55 4K UHD',
            unit_price: 5000,
            quantity: 1,
            sku: 'LG123',
            description: 'Experiência cristalina em 4K.'
        },
        {
            name: 'LED Android TV 4K UHD LED',
            unit_price: 5000,
            quantity: 1,
            sku: 'SAM123',
            description: 'Android TV de 126 cm (50).'
        },
    ]
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
