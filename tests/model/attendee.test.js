const Attendee = require('../../src/model/attendee');

describe('Attendee', () => {
    it('should create an attendee object with the constructor successfully', () => {
        const attendee = new Attendee({
            document: '444.631.330-41',
            dob: '1992-03-28'
        });

        expect(attendee.document).toBe('444.631.330-41');
        expect(attendee.dob).toBe('1992-03-28');
    });

    it('should create an attendee object and set the values successfully', () => {
        const attendee = new Attendee();
        attendee.document = '444.631.330-41';
        attendee.dob = '1992-03-28';

        expect(attendee.document).toBe('444.631.330-41');
        expect(attendee.dob).toBe('1992-03-28');
    });

    it('should create an empty attendee object successfully', () => {
        const attendee = new Attendee();

        expect(attendee.document).toBeUndefined();
        expect(attendee.dob).toBeUndefined();
    });

    it('should create and set empty properties for an attendee object successfully', () => {
        const attendee = new Attendee({
            document: '444.631.330-41',
            dob: '1992-03-28'
        });

        attendee.document = null;
        attendee.dob = null;

        expect(attendee.document).toBeNull();
        expect(attendee.dob).toBeNull();
    });
});
