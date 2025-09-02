const ipagClient = require('../config');

const subscriptionPlanId = 20;

ipagClient.subscriptionPlan().delete(subscriptionPlanId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
