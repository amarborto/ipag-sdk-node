const ipagClient = require('../config');
const { Voucher } = require('../../index');

const voucher = new Voucher({
    order: {
        order_id: '128',
        amount: 100,
        created_at: '2023-10-13 21:45:10',
        callback_url: 'https://ipag-sdk.requestcatcher.com/callback'
    },
    seller: {
        cpf_cnpj: '168.853.290-02'
    },
    customer: {
        name: 'Bruce Wayne',
        email: 'brucewayne@email.com',
        cpf_cnpj: '490.558.550-30',
        phone: '(22) 2222-33333',
        business_name: 'Wayne Enterprises',
        birthdate: '1987-02-19',
        address: {
            street: 'Avenida Principal',
            number: '12345',
            complement: 'Sala 02',
            district: 'São Paulo',
            city: 'São Paulo',
            state: 'SP',
            zipcode: '01310-000'
        }
    }
});

ipagClient.voucher().create(voucher)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
