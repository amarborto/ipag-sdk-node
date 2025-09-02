const { instanceClient } = require('../IpagClient');
const { Antifraud } = require('../../index');
const RedShieldProvider = require('../../src/support/provider/antifraudes/redShieldProvider');
const HttpException = require('../../src/exception/httpException');

describe('EstablishmentAntifraudEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    data: {
                        credentials: [],
                        active_brands: [],
                    }
                }
            }
        ]);

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

        const responseConfig = await client.establishment().antifraud().config(antifraud, establishmentUuid);
        expect(responseConfig.data.data.credentials).toEqual([]);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        acquirer: [
                            "Acquirer is required",
                            "Acquirer contains an item that is not in the list",
                        ]
                    }
                }
            }
        ]);

        const antifraud = new Antifraud();
        const establishmentUuid = 'bb36c34eb6644ab9694315af7d68e629';

        await expect(client.establishment().antifraud().config(antifraud, establishmentUuid)).rejects.toThrow(HttpException);
    });
});
