const Model = require('./model');
const Attendee = require('./attendee');

class Ticket extends Model {
    constructor(data) {
        super(data);
        if (data && data.attendee) {
            this.attendee = new Attendee(data.attendee);
        }
    }
}

module.exports = Ticket;