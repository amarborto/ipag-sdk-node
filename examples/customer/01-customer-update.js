const ipagClient = require('../config');
const { Customer } = require('../../index');

const customer = new Customer({
    name: 'Arthur Morgan',
    email: 'arthurmorgan@email.com',
    cpf_cnpj: '212.348.796-11',
    phone: '(11) 2222-3333',
    business_name: 'Arthur Morgan Ltda.',
    birthdate: '1987-11-21',
    ip: '177.124.100.173',
    address: {
        street: 'Avenida Paulista',
        number: '01',
        district: 'São Paulo',
        city: 'São Paulo',
        state: 'SP',
        zipcode: '01310-930'
    }
});

const customerId = 100011;

ipagClient.customer().update(customer, customerId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
