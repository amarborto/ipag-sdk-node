const Model = require('./model');
const Venue = require('./venue');
const Ticket = require('./ticket');

class Event extends Model {
  constructor(data) {
    super(data);
    if (this.venue) {
      this.venue = new Venue(this.venue);
    }
    if (this.tickets) {
      this.tickets = this.tickets.map(t => new Ticket(t));
    }
  }
}

module.exports = Event;
