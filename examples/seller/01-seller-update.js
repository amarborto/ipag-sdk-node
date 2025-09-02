const ipagClient = require('../config');
const { Seller } = require('../../index');

const seller = new Seller({
    name: 'Alfred Pennyworth',
    cpf_cnpj: '194.448.960-64',
    email: 'alfredpenny@email.com',
    phone: '(11) 1111-22222',
    description: '',
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
        birthdate: '1987-02-19',
    },
    bank: {
        code: '999',
        agency: '1234',
        account: '54321',
        type: 'checkings',
        external_id: '1',
    }
});

const sellerId = 100022;

ipagClient.seller().update(seller, sellerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
