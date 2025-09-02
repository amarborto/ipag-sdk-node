const { instanceClient } = require('../IpagClient');
const { Customer } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('CustomerEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 200,
                data: {
                    id: 1,
                    uuid: "abc123",
                    resource: "customers",
                    attributes: []
                }
            }
        ]);

        const c = new Customer({
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            cpf_cnpj: '074.598.263-83',
            phone: '(98) 3792-4834',
            address: {
                street: 'Rua Agenor Vieira',
                number: 123,
                district: 'São Francisco',
                city: 'São Luís',
                state: 'MA',
                zipcode: '65076-020'
            }
        });

        const responseCustomer = await client.customer().create(c);
        expect(responseCustomer.data.id).toBe(1);
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
                            "Name must not exceed 100 characters",
                        ]
                    }
                }
            }
        ]);

        const c = new Customer();

        await expect(client.customer().create(c)).rejects.toThrow(HttpException);
    });
});
