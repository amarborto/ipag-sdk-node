const Boleto = require('../../src/model/boleto');

describe('Boleto', () => {
    it('should create a boleto object with the constructor successfully', () => {
        const boleto = new Boleto({
            due_date: '2018-07-31',
            instructions: [
                'Instruções 1',
                'Instruções 2',
                'Instruções 3',
            ]
        });

        expect(boleto.due_date).toBe('2018-07-31');
        expect(boleto.instructions).toEqual([
            'Instruções 1',
            'Instruções 2',
            'Instruções 3',
        ]);
    });

    it('should create a boleto object and set the values successfully', () => {
        const boleto = new Boleto();
        boleto.due_date = '2018-07-31';
        boleto.instructions = [
            'Instruções 1',
            'Instruções 2',
            'Instruções 3',
        ];

        expect(boleto.due_date).toBe('2018-07-31');
        expect(boleto.instructions).toEqual([
            'Instruções 1',
            'Instruções 2',
            'Instruções 3',
        ]);
    });

    it('should create an empty boleto object successfully', () => {
        const boleto = new Boleto();

        expect(boleto.due_date).toBeUndefined();
        expect(boleto.instructions).toBeUndefined();
    });

    it('should create and set empty properties for a boleto object successfully', () => {
        const boleto = new Boleto({
            due_date: '2018-07-31',
            instructions: [
                'Instruções 1',
                'Instruções 2',
                'Instruções 3',
            ]
        });

        boleto.due_date = null;
        boleto.instructions = null;

        expect(boleto.due_date).toBeNull();
        expect(boleto.instructions).toBeNull();
    });
});
