const Subscription = require('../../src/model/subscription');

describe('Subscription', () => {
    it('should create a subscription object with the constructor successfully', () => {
        const subscription = new Subscription({
            is_active: true,
            profile_id: 'SUB_001',
            plan_id: 1,
            customer_id: 100001,
            starting_date: '2021-07-10',
            closing_date: '2021-08-10',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            creditcard_token: '123'
        });

        expect(subscription.is_active).toBe(true);
        expect(subscription.profile_id).toBe('SUB_001');
        expect(subscription.plan_id).toBe(1);
        expect(subscription.customer_id).toBe(100001);
        expect(subscription.starting_date).toBe('2021-07-10');
        expect(subscription.closing_date).toBe('2021-08-10');
        expect(subscription.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(subscription.creditcard_token).toBe('123');
    });

    it('should create a subscription object and set the values successfully', () => {
        const subscription = new Subscription();
        subscription.is_active = true;
        subscription.profile_id = 'SUB_001';
        subscription.plan_id = 1;
        subscription.customer_id = 100001;
        subscription.starting_date = '2021-07-10';
        subscription.closing_date = '2021-08-10';
        subscription.callback_url = 'https://ipag-sdk.requestcatcher.com/callback';
        subscription.creditcard_token = '123';

        expect(subscription.is_active).toBe(true);
        expect(subscription.profile_id).toBe('SUB_001');
        expect(subscription.plan_id).toBe(1);
        expect(subscription.customer_id).toBe(100001);
        expect(subscription.starting_date).toBe('2021-07-10');
        expect(subscription.closing_date).toBe('2021-08-10');
        expect(subscription.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(subscription.creditcard_token).toBe('123');
    });

    it('should create an empty subscription object successfully', () => {
        const subscription = new Subscription();

        expect(subscription.is_active).toBeUndefined();
        expect(subscription.profile_id).toBeUndefined();
        expect(subscription.plan_id).toBeUndefined();
        expect(subscription.customer_id).toBeUndefined();
        expect(subscription.starting_date).toBeUndefined();
        expect(subscription.closing_date).toBeUndefined();
        expect(subscription.callback_url).toBeUndefined();
        expect(subscription.creditcard_token).toBeUndefined();
    });

    it('should create and set empty properties for a subscription object successfully', () => {
        const subscription = new Subscription({
            is_active: true,
            profile_id: 'SUB_001',
            plan_id: 1,
            customer_id: 100001,
            starting_date: '2021-07-10',
            closing_date: '2021-08-10',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            creditcard_token: '123'
        });

        subscription.is_active = null;
        subscription.profile_id = null;
        subscription.plan_id = null;
        subscription.customer_id = null;
        subscription.starting_date = null;
        subscription.closing_date = null;
        subscription.callback_url = null;
        subscription.creditcard_token = null;

        expect(subscription.is_active).toBeNull();
        expect(subscription.profile_id).toBeNull();
        expect(subscription.plan_id).toBeNull();
        expect(subscription.customer_id).toBeNull();
        expect(subscription.starting_date).toBeNull();
        expect(subscription.closing_date).toBeNull();
        expect(subscription.callback_url).toBeNull();
        expect(subscription.creditcard_token).toBeNull();
    });
});
