const { instanceClient } = require('../IpagClient');
const { Voucher } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('VoucherEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    data: {
                        id: 45,
                        uuid: "asd54sd5f4s56d4f54s5f45f",
                        resource: "vouchers"
                    }
                }
            }
        ]);

        const voucher = new Voucher({
            order: {
                order_id: '100012',
                amount: 699.99,
                created_at: '2020-08-04 21:45:10',
                callback_url: 'https://ipag-sdk.requestcatcher.com/callback'
            },
            seller: {
                cpf_cnpj: '854.508.440-42'
            },
            customer: {
                name: 'FULANO DA SILVA',
                address: {
                    street: 'Av. Brasil',
                }
            }
        });

        const responseVoucher = await client.voucher().create(voucher);
        expect(responseVoucher.data.data.id).toBe(45);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        seller: [
                            "Seller is required",
                            "Seller Invalid; Seller.cpf Cnpj is required",
                        ]
                    }
                }
            }
        ]);

        const voucher = new Voucher();

        await expect(client.voucher().create(voucher)).rejects.toThrow(HttpException);
    });
});
