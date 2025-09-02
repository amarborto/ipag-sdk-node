const ipagClient = require('../config');
const { SplitRules } = require('../../index');

const splitRules = new SplitRules({
    receiver_id: "100024",
    percentage: 10.00
});

const transactionId = 139;

ipagClient.splitRules().create(splitRules, transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
