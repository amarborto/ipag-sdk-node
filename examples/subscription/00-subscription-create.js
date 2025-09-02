const ipagClient = require('../config');
const { Subscription } = require('../../index');

const subscription = new Subscription({
    is_active: true,
    profile_id: 'SUB_004',
    plan_id: 19,
    customer_id: 100020,
    starting_date: '2023-10-25',
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    creditcard_token: '552af952-e189-45d5-b974-e5bb87385e01'
});

ipagClient.subscription().create(subscription)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
