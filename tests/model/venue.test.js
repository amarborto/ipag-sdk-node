const Venue = require('../../src/model/venue');

describe('Venue', () => {
    it('should create a venue object with the constructor successfully', () => {
        const venue = new Venue({
            name: 'Campo - Clube das Laranjeiras',
            capacity: 2000,
            address: 'Av. Santos Dumont',
            city: 'São Paulo',
            state: 'SP'
        });

        expect(venue.name).toBe('Campo - Clube das Laranjeiras');
        expect(venue.capacity).toBe(2000);
        expect(venue.address).toBe('Av. Santos Dumont');
        expect(venue.city).toBe('São Paulo');
        expect(venue.state).toBe('SP');
    });

    it('should create a venue object and set the values successfully', () => {
        const venue = new Venue();
        venue.name = 'Campo - Clube das Laranjeiras';
        venue.capacity = 2000;
        venue.address = 'Av. Santos Dumont';
        venue.city = 'São Paulo';
        venue.state = 'SP';

        expect(venue.name).toBe('Campo - Clube das Laranjeiras');
        expect(venue.capacity).toBe(2000);
        expect(venue.address).toBe('Av. Santos Dumont');
        expect(venue.city).toBe('São Paulo');
        expect(venue.state).toBe('SP');
    });

    it('should create an empty venue object successfully', () => {
        const venue = new Venue();

        expect(venue.name).toBeUndefined();
        expect(venue.capacity).toBeUndefined();
        expect(venue.address).toBeUndefined();
        expect(venue.city).toBeUndefined();
        expect(venue.state).toBeUndefined();
    });

    it('should create and set empty properties for a venue object successfully', () => {
        const venue = new Venue({
            name: 'Campo - Clube das Laranjeiras',
            capacity: 2000,
            address: 'Av. Santos Dumont',
            city: 'São Paulo',
            state: 'SP'
        });

        venue.name = null;
        venue.capacity = null;
        venue.address = null;
        venue.city = null;
        venue.state = null;

        expect(venue.name).toBeNull();
        expect(venue.capacity).toBeNull();
        expect(venue.address).toBeNull();
        expect(venue.city).toBeNull();
        expect(venue.state).toBeNull();
    });
});
