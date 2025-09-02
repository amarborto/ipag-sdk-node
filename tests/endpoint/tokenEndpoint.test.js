const { instanceClient } = require('../IpagClient');
const { Token } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('TokenEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    token: "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA",
                    resource: "card_token",
                    attributes: []
                }
            }
        ]);

        const token = new Token({
            card: {
                holderName: 'Frederic Sales',
                number: '4024007112512933',
                expiryMonth: '02',
                expiryYear: '2023',
                cvv: '431'
            },
            holder: {
                name: 'Frederic Sales',
                cpfCnpj: '79999338801',
                mobilePhone: '1899767866',
                birthdate: '1989-03-28',
                address: {
                    street: 'Rua dos Testes',
                    number: '100',
                    district: 'Tamboré',
                    zipcode: '06460080',
                    city: 'Barueri',
                    state: 'SP'
                }
            }
        });

        const responseToken = await client.token().create(token);
        expect(responseToken.data.token).toBe("AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA");
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        card: [
                            "Card is required",
                            "Card Invalid",
                        ]
                    }
                }
            }
        ]);

        const token = new Token();

        await expect(client.token().create(token)).rejects.toThrow(HttpException);
    });
});
