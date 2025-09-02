const ipagClient = require('../config');
const { Antifraud } = require('../../index');
const { RedShieldProvider } = require('../../support/provider/antifraudes');

const antifraud = new Antifraud({
    provider: new RedShieldProvider({
        token: "xxxxxxxx",
        entityId: "xxxxxxxx",
        channelId: "xxxxxxxx",
        serviceId: "xxxxxxxx"
    }).jsonSerialize(),
    settings: {
        enable: true,
        environment: "test",
        consult_mode: "auto",
        capture_on_approval: false,
        cancel_on_refused: true,
        review_score_threshold: 0.8
    }
});

const establishmentUuid = 'bb36c34eb6644ab9694315af7d68e629';

ipagClient.establishment().antifraud().config(antifraud, establishmentUuid)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
