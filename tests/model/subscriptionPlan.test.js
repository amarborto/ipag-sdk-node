const SubscriptionPlan = require('../../src/model/subscriptionPlan');
const Trial = require('../../src/model/trial');

describe('SubscriptionPlan', () => {
    it('should create a subscription plan object with the constructor successfully', () => {
        const subscriptionPlan = new SubscriptionPlan({
            name: "PLANO GOLD",
            description: "Plano Gold com até 4 treinos por semana",
            amount: 0,
            frequency: "monthly",
            interval: 1,
            cycles: 0,
            best_day: true,
            pro_rated_charge: true,
            grace_period: 0,
            callback_url: "https://ipag-sdk.requestcatcher.com/callback",
            installments: 3,
            trial: {
                amount: 0,
            }
        });

        expect(subscriptionPlan.name).toBe('PLANO GOLD');
        expect(subscriptionPlan.description).toBe('Plano Gold com até 4 treinos por semana');
        expect(subscriptionPlan.amount).toBe(0);
        expect(subscriptionPlan.frequency).toBe('monthly');
        expect(subscriptionPlan.interval).toBe(1);
        expect(subscriptionPlan.cycles).toBe(0);
        expect(subscriptionPlan.best_day).toBe(true);
        expect(subscriptionPlan.pro_rated_charge).toBe(true);
        expect(subscriptionPlan.grace_period).toBe(0);
        expect(subscriptionPlan.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(subscriptionPlan.installments).toBe(3);
        expect(subscriptionPlan.trial).toBeInstanceOf(Trial);
        expect(subscriptionPlan.trial.amount).toBe(0);
    });

    it('should create a subscription plan object and set the values successfully', () => {
        const subscriptionPlan = new SubscriptionPlan();
        subscriptionPlan.name = "PLANO GOLD";
        subscriptionPlan.description = "Plano Gold com até 4 treinos por semana";
        subscriptionPlan.amount = 99.00;
        subscriptionPlan.frequency = "monthly";
        subscriptionPlan.interval = 1;
        subscriptionPlan.cycles = 0;
        subscriptionPlan.best_day = true;
        subscriptionPlan.pro_rated_charge = true;
        subscriptionPlan.grace_period = 0;
        subscriptionPlan.callback_url = "https://ipag-sdk.requestcatcher.com/callback";
        subscriptionPlan.installments = 6;
        subscriptionPlan.trial = new Trial({
            amount: 0,
        });

        expect(subscriptionPlan.name).toBe('PLANO GOLD');
        expect(subscriptionPlan.description).toBe('Plano Gold com até 4 treinos por semana');
        expect(subscriptionPlan.amount).toBe(99.00);
        expect(subscriptionPlan.frequency).toBe('monthly');
        expect(subscriptionPlan.interval).toBe(1);
        expect(subscriptionPlan.cycles).toBe(0);
        expect(subscriptionPlan.best_day).toBe(true);
        expect(subscriptionPlan.pro_rated_charge).toBe(true);
        expect(subscriptionPlan.grace_period).toBe(0);
        expect(subscriptionPlan.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(subscriptionPlan.installments).toBe(6);
        expect(subscriptionPlan.trial).toBeInstanceOf(Trial);
        expect(subscriptionPlan.trial.amount).toBe(0);
    });

    it('should create an empty subscription plan object successfully', () => {
        const subscriptionPlan = new SubscriptionPlan();

        expect(subscriptionPlan.name).toBeUndefined();
        expect(subscriptionPlan.description).toBeUndefined();
        expect(subscriptionPlan.amount).toBeUndefined();
        expect(subscriptionPlan.frequency).toBeUndefined();
        expect(subscriptionPlan.interval).toBeUndefined();
        expect(subscriptionPlan.cycles).toBeUndefined();
        expect(subscriptionPlan.best_day).toBeUndefined();
        expect(subscriptionPlan.pro_rated_charge).toBeUndefined();
        expect(subscriptionPlan.grace_period).toBeUndefined();
        expect(subscriptionPlan.callback_url).toBeUndefined();
        expect(subscriptionPlan.installments).toBeUndefined();
        expect(subscriptionPlan.trial).toBeUndefined();
    });

    it('should create and set empty properties for a subscription plan object successfully', () => {
        const subscriptionPlan = new SubscriptionPlan({
            name: "PLANO GOLD",
            description: "Plano Gold com até 4 treinos por semana",
            amount: 99.00,
            frequency: "monthly",
            interval: 1,
            cycles: 0,
            best_day: true,
            pro_rated_charge: true,
            grace_period: 0,
            callback_url: "https://ipag-sdk.requestcatcher.com/callback",
            trial: {
                amount: 0,
                cycles: 0
            }
        });

        subscriptionPlan.name = null;
        subscriptionPlan.description = null;
        subscriptionPlan.amount = null;
        subscriptionPlan.frequency = null;
        subscriptionPlan.interval = null;
        subscriptionPlan.cycles = null;
        subscriptionPlan.best_day = null;
        subscriptionPlan.pro_rated_charge = null;
        subscriptionPlan.grace_period = null;
        subscriptionPlan.callback_url = null;
        subscriptionPlan.installments = null;
        subscriptionPlan.trial = null;

        expect(subscriptionPlan.name).toBeNull();
        expect(subscriptionPlan.description).toBeNull();
        expect(subscriptionPlan.amount).toBeNull();
        expect(subscriptionPlan.frequency).toBeNull();
        expect(subscriptionPlan.interval).toBeNull();
        expect(subscriptionPlan.cycles).toBeNull();
        expect(subscriptionPlan.best_day).toBeNull();
        expect(subscriptionPlan.pro_rated_charge).toBeNull();
        expect(subscriptionPlan.grace_period).toBeNull();
        expect(subscriptionPlan.callback_url).toBeNull();
        expect(subscriptionPlan.installments).toBeNull();
        expect(subscriptionPlan.trial).toBeNull();
    });
});
