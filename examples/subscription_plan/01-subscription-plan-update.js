const ipagClient = require('../config');
const { SubscriptionPlan, Interval } = require('../../index');

const subscriptionPlan = new SubscriptionPlan({
    name: 'PLANO SILVER',
    description: 'Plano Silver com até 2 treinos por semana',
    amount: 80,
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

const subscriptionPlanId = 21;

ipagClient.subscriptionPlan().update(subscriptionPlan, subscriptionPlanId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
