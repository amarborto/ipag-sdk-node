const ipagClient = require('../config');
const { Establishment } = require('../../index');

const establishment = new Establishment({
    name: 'Wayne Enterprises',
    email: 'contact@wayneenterprises.com',
    login: 'wayne1',
    password: 'bat123',
    document: '490.558.550-30',
    phone: '(22) 2222-33333',
    is_active: true,
    address: {
        street: 'Avenida Principal',
        number: '12345',
        district: 'São Paulo',
        city: 'São Paulo',
        state: 'SP',
        zipcode: '01310-000'
    },
    owner: {
        name: 'Bruce Wayne',
        email: 'brucewayne@email.com',
        cpf: '490.558.550-30',
        phone: '(22) 2222-33333',
    },
    bank: {
        code: '999',
        agency: '1234',
        account: '12345',
        type: 'checkings',
        external_id: '1',
    }
});

ipagClient.establishment().create(establishment)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
