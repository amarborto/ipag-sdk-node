const Trial = require('../../src/model/trial');

describe('Trial', () => {
    it('should create a trial object with the constructor successfully', () => {
        const trial = new Trial({
            amount: 0,
            cycles: 0,
            frequency: 1
        });

        expect(trial.amount).toBe(0);
        expect(trial.cycles).toBe(0);
        expect(trial.frequency).toBe(1);
    });

    it('should create a trial object and set the values successfully', () => {
        const trial = new Trial();
        trial.amount = 2.5;
        trial.cycles = 2;
        trial.frequency = 1;

        expect(trial.amount).toBe(2.5);
        expect(trial.cycles).toBe(2);
        expect(trial.frequency).toBe(1);
    });

    it('should create an empty trial object successfully', () => {
        const trial = new Trial();

        expect(trial.amount).toBeUndefined();
        expect(trial.cycles).toBeUndefined();
        expect(trial.frequency).toBeUndefined();
    });

    it('should create and set empty properties for a trial object successfully', () => {
        const trial = new Trial({
            amount: 1.5,
            cycles: 1,
            frequency: 1
        });

        trial.amount = null;
        trial.cycles = null;
        trial.frequency = null;

        expect(trial.amount).toBeNull();
        expect(trial.cycles).toBeNull();
        expect(trial.frequency).toBeNull();
    });
});
