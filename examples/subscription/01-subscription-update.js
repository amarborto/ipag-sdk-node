const ipagClient = require('../config');
const { Subscription } = require('../../index');

const subscription = new Subscription({
    is_active: false,
});

const subscriptionId = 45;

ipagClient.subscription().update(subscription, subscriptionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
