const Buttons = require('../../src/model/buttons');

describe('Buttons', () => {
    it('should create a buttons object with the constructor successfully', () => {
        const buttons = new Buttons({
            enable: false,
            one: 0,
            two: 0,
            three: 0,
            description: 'Test description',
            header: 'Test header',
            subHeader: 'Test sub header',
            expireAt: '2020-12-25 23:59:59',
        });

        expect(buttons.enable).toBe(false);
        expect(buttons.one).toBe(0);
        expect(buttons.two).toBe(0);
        expect(buttons.three).toBe(0);
        expect(buttons.description).toBe('Test description');
        expect(buttons.header).toBe('Test header');
        expect(buttons.subHeader).toBe('Test sub header');
        expect(buttons.expireAt).toBe('2020-12-25 23:59:59');
    });

    it('should create a buttons object and set the values successfully', () => {
        const buttons = new Buttons();
        buttons.enable = false;
        buttons.one = 0;
        buttons.two = 0;
        buttons.three = 0;
        buttons.description = 'Test description';
        buttons.header = 'Test header';
        buttons.subHeader = 'Test sub header';
        buttons.expireAt = '2020-12-25 23:59:59';

        expect(buttons.enable).toBe(false);
        expect(buttons.one).toBe(0);
        expect(buttons.two).toBe(0);
        expect(buttons.three).toBe(0);
        expect(buttons.description).toBe('Test description');
        expect(buttons.header).toBe('Test header');
        expect(buttons.subHeader).toBe('Test sub header');
        expect(buttons.expireAt).toBe('2020-12-25 23:59:59');
    });

    it('should create an empty buttons object successfully', () => {
        const buttons = new Buttons();

        expect(buttons.enable).toBeUndefined();
        expect(buttons.one).toBeUndefined();
        expect(buttons.two).toBeUndefined();
        expect(buttons.three).toBeUndefined();
        expect(buttons.description).toBeUndefined();
        expect(buttons.header).toBeUndefined();
        expect(buttons.subHeader).toBeUndefined();
        expect(buttons.expireAt).toBeUndefined();
    });

    it('should create and set empty properties for a buttons object successfully', () => {
        const buttons = new Buttons({
            enable: false,
            one: 0,
            two: 0,
            three: 0,
            description: 'Test description',
            header: 'Test header',
            subHeader: 'Test sub header',
            expireAt: '2020-12-25 23:59:59',
        });

        buttons.enable = null;
        buttons.one = null;
        buttons.two = null;
        buttons.three = null;
        buttons.description = null;
        buttons.header = null;
        buttons.subHeader = null;
        buttons.expireAt = null;

        expect(buttons.enable).toBeNull();
        expect(buttons.one).toBeNull();
        expect(buttons.two).toBeNull();
        expect(buttons.three).toBeNull();
        expect(buttons.description).toBeNull();
        expect(buttons.header).toBeNull();
        expect(buttons.subHeader).toBeNull();
        expect(buttons.expireAt).toBeNull();
    });
});