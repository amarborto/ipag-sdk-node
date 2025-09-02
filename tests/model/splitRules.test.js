const SplitRules = require('../../src/model/splitRules');

describe('SplitRules', () => {
    it('should create a split rules object with the constructor successfully', () => {
        const splitRules = new SplitRules({
            receiver_id: "1000000",
            percentage: 10.00,
            amount: 9.99,
            charge_processing_fee: false
        });

        expect(splitRules.receiver_id).toBe('1000000');
        expect(splitRules.percentage).toBe(10.00);
        expect(splitRules.amount).toBe(9.99);
        expect(splitRules.charge_processing_fee).toBe(false);
    });

    it('should create a split rules object and set the values successfully', () => {
        const splitRules = new SplitRules();
        splitRules.receiver_id = "1000000";
        splitRules.percentage = 10.00;
        splitRules.amount = 9.99;
        splitRules.charge_processing_fee = false;

        expect(splitRules.receiver_id).toBe('1000000');
        expect(splitRules.percentage).toBe(10.00);
        expect(splitRules.amount).toBe(9.99);
        expect(splitRules.charge_processing_fee).toBe(false);
    });

    it('should create an empty split rules object successfully', () => {
        const splitRules = new SplitRules();

        expect(splitRules.receiver_id).toBeUndefined();
        expect(splitRules.percentage).toBeUndefined();
        expect(splitRules.amount).toBeUndefined();
        expect(splitRules.charge_processing_fee).toBeUndefined();
    });

    it('should create and set empty properties for a split rules object successfully', () => {
        const splitRules = new SplitRules({
            receiver_id: "1000000",
            percentage: 10.00,
            amount: 9.99,
            charge_processing_fee: false
        });

        splitRules.receiver_id = null;
        splitRules.percentage = null;
        splitRules.amount = null;
        splitRules.charge_processing_fee = null;

        expect(splitRules.receiver_id).toBeNull();
        expect(splitRules.percentage).toBeNull();
        expect(splitRules.amount).toBeNull();
        expect(splitRules.charge_processing_fee).toBeNull();
    });
});
