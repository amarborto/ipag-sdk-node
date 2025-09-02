const Ticket = require('../../src/model/ticket');
const Attendee = require('../../src/model/attendee');

describe('Ticket', () => {
    it('should create a ticket object with the constructor successfully', () => {
        const ticket = new Ticket({
            id: 'EVENT001',
            category: 'regular',
            premium: false,
            section: 'Pista',
            attendee: {
                document: '972.089.620-57',
            }
        });

        expect(ticket.id).toBe('EVENT001');
        expect(ticket.category).toBe('regular');
        expect(ticket.premium).toBe(false);
        expect(ticket.section).toBe('Pista');
        expect(ticket.attendee).toBeInstanceOf(Attendee);
        expect(ticket.attendee.document).toBe('972.089.620-57');
    });

    it('should create a ticket object and set the values successfully', () => {
        const ticket = new Ticket();
        ticket.id = 'EVENT001';
        ticket.category = 'regular';
        ticket.premium = false;
        ticket.section = 'Pista';
        ticket.attendee = new Attendee({
            document: '972.089.620-57',
        });

        expect(ticket.id).toBe('EVENT001');
        expect(ticket.category).toBe('regular');
        expect(ticket.premium).toBe(false);
        expect(ticket.section).toBe('Pista');
        expect(ticket.attendee).toBeInstanceOf(Attendee);
        expect(ticket.attendee.document).toBe('972.089.620-57');
    });

    it('should create an empty ticket object successfully', () => {
        const ticket = new Ticket();

        expect(ticket.id).toBeUndefined();
        expect(ticket.category).toBeUndefined();
        expect(ticket.premium).toBeUndefined();
        expect(ticket.section).toBeUndefined();
        expect(ticket.attendee).toBeUndefined();
    });

    it('should create and set empty properties for a ticket object successfully', () => {
        const ticket = new Ticket({
            id: 'EVENT001',
            category: 'regular',
            premium: false,
            section: 'Pista',
            attendee: {
                document: '972.089.620-57',
            }
        });

        ticket.id = null;
        ticket.category = null;
        ticket.premium = null;
        ticket.section = null;
        ticket.attendee = null;

        expect(ticket.id).toBeNull();
        expect(ticket.category).toBeNull();
        expect(ticket.premium).toBeNull();
        expect(ticket.section).toBeNull();
        expect(ticket.attendee).toBeNull();
    });
});
