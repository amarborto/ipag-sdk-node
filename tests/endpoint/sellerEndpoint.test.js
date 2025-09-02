const { instanceClient } = require('../IpagClient');
const { Seller } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('SellerEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'sellers',
                    attributes: []
                }
            }
        ]);

        const seller = new Seller({
            login: "josefrancisco",
            password: "123123",
            name: "José Francisco Chicó",
            cpf_cnpj: "854.508.440-42",
            email: "jose@mail.me",
            phone: "(11) 98712-1234",
            description: "XXXXXXXXXXXXXX",
            address: {
                street: "Rua Júlio Gonzalez",
            },
            owner: {
                name: "Giosepe",
            },
            bank: {
                code: "290",
            }
        });

        const responseSeller = await client.seller().create(seller);
        expect(responseSeller.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        login: [
                            "Login is required",
                            "Login must be at least 6 characters long",
                        ]
                    }
                }
            }
        ]);

        const seller = new Seller();

        await expect(client.seller().create(seller)).rejects.toThrow(HttpException);
    });
});
