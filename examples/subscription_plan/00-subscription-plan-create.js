const ipagClient = require('../config');
const { SubscriptionPlan, Interval } = require('../../index');

const subscriptionPlan = new SubscriptionPlan({
    name: 'PLANO GOLD',
    description: 'Plano Gold com até 4 treinos por semana',
    amount: 100,
    frequency: Interval.MONTHLY,
    interval: 1,
    cycles: 0,
    best_day: true,
    pro_rated_charge: true,
    grace_period: 0,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    installments: 1,
    trial: {
        amount: 0,
        cycles: 0
    }
});

ipagClient.subscriptionPlan().create(subscriptionPlan)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
