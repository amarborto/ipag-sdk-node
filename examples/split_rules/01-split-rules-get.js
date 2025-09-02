const ipagClient = require('../config');

const splitRuleId = 11;
const transactionId = 139;

ipagClient.splitRules().get(splitRuleId, transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
