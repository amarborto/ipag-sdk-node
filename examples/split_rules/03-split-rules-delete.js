const ipagClient = require('../config');

const splitRuleId = 9;
const transactionId = 139;

ipagClient.splitRules().delete(splitRuleId, transactionId)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
