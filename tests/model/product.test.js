const Product = require('../../src/model/product');

describe('Product', () => {
    it('should create a product object with the constructor successfully', () => {
        const product = new Product({
            name: 'Smart TV LG 55 4K UHD',
            unit_price: 3.999,
            quantity: 1,
            sku: 'LG55UHD',
            description: 'Smart TV LG 55 4K UHD',
        });

        expect(product.name).toBe('Smart TV LG 55 4K UHD');
        expect(product.unit_price).toBe(3.999);
        expect(product.quantity).toBe(1);
        expect(product.sku).toBe('LG55UHD');
        expect(product.description).toBe('Smart TV LG 55 4K UHD');
    });

    it('should create a product object and set the values successfully', () => {
        const product = new Product();
        product.name = 'Smart TV LG 55 4K UHD';
        product.unit_price = 3.999;
        product.quantity = 1;
        product.sku = 'LG55UHD';
        product.description = 'Smart TV LG 55 4K UHD';

        expect(product.name).toBe('Smart TV LG 55 4K UHD');
        expect(product.unit_price).toBe(3.999);
        expect(product.quantity).toBe(1);
        expect(product.sku).toBe('LG55UHD');
        expect(product.description).toBe('Smart TV LG 55 4K UHD');
    });

    it('should create an empty product object successfully', () => {
        const product = new Product();

        expect(product.name).toBeUndefined();
        expect(product.unit_price).toBeUndefined();
        expect(product.quantity).toBeUndefined();
        expect(product.sku).toBeUndefined();
        expect(product.description).toBeUndefined();
    });

    it('should create and set empty properties for a product object successfully', () => {
        const product = new Product({
            name: 'Smart TV LG 55 4K UHD',
            unit_price: 3.999,
            quantity: 1,
            sku: 'LG55UHD',
            description: 'Smart TV LG 55 4K UHD',
        });

        product.name = null;
        product.unit_price = null;
        product.quantity = null;
        product.sku = null;
        product.description = null;

        expect(product.name).toBeNull();
        expect(product.unit_price).toBeNull();
        expect(product.quantity).toBeNull();
        expect(product.sku).toBeNull();
        expect(product.description).toBeNull();
    });
});
