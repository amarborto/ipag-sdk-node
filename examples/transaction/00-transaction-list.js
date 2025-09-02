const ipagClient = require('../config');

ipagClient.transaction().list({
    order: 'desc',
    from_date: '2023-10-06'
})
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
