const ipagClient = require('../config');
const { Token } = require('../../index');

const token = new Token({
    card: {
        holderName: 'Bruce Wayne',
        number: '4111111111111111',
        expiryMonth: '01',
        expiryYear: '2025',
        cvv: '123'
    },
    holder: {
        name: 'Bruce Wayne',
        cpfCnpj: '490.558.550-30',
        mobilePhone: '(22) 2222-33333',
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

ipagClient.token().create(token)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
