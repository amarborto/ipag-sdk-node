const { instanceClient } = require('../IpagClient');
const { Establishment } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('EstablishmentEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'establishments',
                    attributes: []
                }
            }
        ]);

        const establishment = new Establishment({
            name: 'Estabelecimento de teste',
            email: 'teste@estabteste.com.br',
            login: 'estabteste',
            password: 'estabteste',
            document: '452.262.530-87',
            phone: '(62) 98901-4380',
            is_active: true,
            address: {
                street: 'Rua A',
            },
            owner: {
                name: 'Lívia Julia Eduarda Barros',
            },
            bank: {
                code: '001'
            }
        });

        const responseEstablishment = await client.establishment().create(establishment);
        expect(responseEstablishment.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        name: [
                            "Name is required",
                            "Name must be at least 6 characters long",
                            "Name must not exceed 100 characters"
                        ]
                    }
                }
            }
        ]);

        const establishment = new Establishment();

        await expect(client.establishment().create(establishment)).rejects.toThrow(HttpException);
    });
});
