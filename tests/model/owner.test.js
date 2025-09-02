const Owner = require('../../src/model/owner');

describe('Owner', () => {
    it('should create an owner object with the constructor successfully', () => {
        const owner = new Owner({
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            cpf: '074.598.263-83',
            phone: '(98) 3792-4834',
            birthdate: '1980-01-01',
        });

        expect(owner.name).toBe('Lívia Julia Eduarda Barros');
        expect(owner.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(owner.cpf).toBe('074.598.263-83');
        expect(owner.phone).toBe('(98) 3792-4834');
        expect(owner.birthdate).toBe('1980-01-01');
    });

    it('should create an owner object and set the values successfully', () => {
        const owner = new Owner();
        owner.name = 'Lívia Julia Eduarda Barros';
        owner.email = 'livia.julia.barros@eximiart.com.br';
        owner.cpf = '074.598.263-83';
        owner.phone = '(98) 3792-4834';
        owner.birthdate = '1980-01-01';

        expect(owner.name).toBe('Lívia Julia Eduarda Barros');
        expect(owner.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(owner.cpf).toBe('074.598.263-83');
        expect(owner.phone).toBe('(98) 3792-4834');
        expect(owner.birthdate).toBe('1980-01-01');
    });

    it('should create an empty owner object successfully', () => {
        const owner = new Owner();

        expect(owner.name).toBeUndefined();
        expect(owner.email).toBeUndefined();
        expect(owner.cpf).toBeUndefined();
        expect(owner.phone).toBeUndefined();
        expect(owner.birthdate).toBeUndefined();
    });

    it('should create and set empty properties for an owner object successfully', () => {
        const owner = new Owner({
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            cpf: '074.598.263-83',
            phone: '(98) 3792-4834',
            birthdate: '1980-01-01',
        });

        owner.name = null;
        owner.email = null;
        owner.cpf = null;
        owner.phone = null;
        owner.birthdate = null;

        expect(owner.name).toBeNull();
        expect(owner.email).toBeNull();
        expect(owner.cpf).toBeNull();
        expect(owner.phone).toBeNull();
        expect(owner.birthdate).toBeNull();
    });
});
