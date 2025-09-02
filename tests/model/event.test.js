const Event = require('../../src/model/event');
const Venue = require('../../src/model/venue');
const Ticket = require('../../src/model/ticket');

describe('Event', () => {
    it('should create an event object with the constructor successfully', () => {
        const event = new Event({
            name: 'Reveillon - 2022',
            date: '2022-01-01 00:00:00',
            type: 'party',
            subtype: 'Reveillon',
            venue: {
                name: 'Campo - Clube das Laranjeiras',
            },
            tickets: [
                {
                    id: 'EVENT001',
                },
                {
                    id: 'EVENT002',
                }
            ]
        });

        expect(event.name).toBe('Reveillon - 2022');
        expect(event.date).toBe('2022-01-01 00:00:00');
        expect(event.type).toBe('party');
        expect(event.subtype).toBe('Reveillon');
        expect(event.venue).toBeInstanceOf(Venue);
        expect(event.venue.name).toBe('Campo - Clube das Laranjeiras');
        expect(event.tickets[0]).toBeInstanceOf(Ticket);
        expect(event.tickets[0].id).toBe('EVENT001');
        expect(event.tickets[1]).toBeInstanceOf(Ticket);
        expect(event.tickets[1].id).toBe('EVENT002');
    });

    it('should create an event object and set the values successfully', () => {
        const event = new Event();
        event.name = 'Reveillon - 2022';
        event.date = '2022-01-01 00:00:00';
        event.type = 'party';
        event.subtype = 'Reveillon';
        event.venue = new Venue({
            name: 'Campo - Clube das Laranjeiras',
        });
        event.tickets = [
            new Ticket({
                id: 'EVENT001',
            }),
            new Ticket({
                id: 'EVENT002',
            })
        ];

        expect(event.name).toBe('Reveillon - 2022');
        expect(event.date).toBe('2022-01-01 00:00:00');
        expect(event.type).toBe('party');
        expect(event.subtype).toBe('Reveillon');
        expect(event.venue).toBeInstanceOf(Venue);
        expect(event.venue.name).toBe('Campo - Clube das Laranjeiras');
        expect(event.tickets[0]).toBeInstanceOf(Ticket);
        expect(event.tickets[0].id).toBe('EVENT001');
        expect(event.tickets[1]).toBeInstanceOf(Ticket);
        expect(event.tickets[1].id).toBe('EVENT002');
    });

    it('should create an empty event object successfully', () => {
        const event = new Event();

        expect(event.name).toBeUndefined();
        expect(event.date).toBeUndefined();
        expect(event.type).toBeUndefined();
        expect(event.subtype).toBeUndefined();
        expect(event.venue).toBeUndefined();
        expect(event.tickets).toBeUndefined();
    });

    it('should create and set empty properties for an event object successfully', () => {
        const event = new Event({
            name: 'Reveillon - 2022',
            date: '2022-01-01 00:00:00',
            type: 'party',
            subtype: 'Reveillon',
            venue: {
                name: 'Campo - Clube das Laranjeiras',
            },
            tickets: [
                {
                    id: 'EVENT001',
                },
                {
                    id: 'EVENT002',
                }
            ]
        });

        event.name = null;
        event.date = null;
        event.type = null;
        event.subtype = null;
        event.venue = null;
        event.tickets = null;

        expect(event.name).toBeNull();
        expect(event.date).toBeNull();
        expect(event.type).toBeNull();
        expect(event.subtype).toBeNull();
        expect(event.venue).toBeNull();
        expect(event.tickets).toBeNull();
    });
});
