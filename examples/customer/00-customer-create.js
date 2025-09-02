const ipagClient = require('../config');
const { Customer } = require('../../index');

const customer = new Customer({
    name: 'Bruce Wayne',
    email: 'brucewayne@email.com',
    cpf_cnpj: '490.558.550-30',
    phone: '(22) 2222-33333',
    business_name: 'Wayne Enterprises',
    birthdate: '1987-02-19',
    address: {
        street: 'Avenida Principal',
        number: '12345',
        district: 'São Paulo',
        city: 'São Paulo',
        state: 'SP',
        zipcode: '01310-000'
    }
});

ipagClient.customer().create(customer)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
