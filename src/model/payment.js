const Model = require('./model');
const PaymentCard = require('./paymentCard');
const Boleto = require('./boleto');

class Payment extends Model {
  constructor(data) {
    super(data);
    if (this.card) {
      this.card = new PaymentCard(this.card);
    }
    if (this.boleto) {
      this.boleto = new Boleto(this.boleto);
    }
  }
}

module.exports = Payment;
