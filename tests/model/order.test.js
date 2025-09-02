const Order = require('../../src/model/order');

describe('Order', () => {
    it('should create an order object with the constructor successfully', () => {
        const order = new Order({
            order_id: '1000077',
            amount: 499.99,
            created_at: '2020-08-03 21:45:10',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            return_url: 'https://ipag-sdk.requestcatcher.com/callback',
            return_type: 'json'
        });

        expect(order.order_id).toBe('1000077');
        expect(order.amount).toBe(499.99);
        expect(order.created_at).toBe('2020-08-03 21:45:10');
        expect(order.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(order.return_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(order.return_type).toBe('json');
    });

    it('should create an order object and set the values successfully', () => {
        const order = new Order();
        order.order_id = '1000077';
        order.amount = 499.99;
        order.created_at = '2020-08-03 21:45:10';
        order.callback_url = 'https://ipag-sdk.requestcatcher.com/callback';
        order.return_url = 'https://ipag-sdk.requestcatcher.com/callback';
        order.return_type = 'json';

        expect(order.order_id).toBe('1000077');
        expect(order.amount).toBe(499.99);
        expect(order.created_at).toBe('2020-08-03 21:45:10');
        expect(order.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(order.return_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(order.return_type).toBe('json');
    });

    it('should create an empty order object successfully', () => {
        const order = new Order();

        expect(order.order_id).toBeUndefined();
        expect(order.amount).toBeUndefined();
        expect(order.created_at).toBeUndefined();
        expect(order.callback_url).toBeUndefined();
        expect(order.return_url).toBeUndefined();
        expect(order.return_type).toBeUndefined();
    });

    it('should create and set empty properties for an order object successfully', () => {
        const order = new Order({
            order_id: '1000077',
            amount: 499.99,
            created_at: '2020-08-03 21:45:10',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            return_url: 'https://ipag-sdk.requestcatcher.com/callback',
            return_type: 'json'
        });

        order.order_id = null;
        order.amount = null;
        order.created_at = null;
        order.callback_url = null;
        order.return_url = null;
        order.return_type = null;

        expect(order.order_id).toBeNull();
        expect(order.amount).toBeNull();
        expect(order.created_at).toBeNull();
        expect(order.callback_url).toBeNull();
        expect(order.return_url).toBeNull();
        expect(order.return_type).toBeNull();
    });
});
