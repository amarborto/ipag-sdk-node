const PaymentStatus = {
  CREATED: 1,
  WAITING_PAYMENT: 2,
  CANCELED: 3,
  IN_ANALYSIS: 4,
  PRE_AUTHORIZED: 5,
  PARTIAL_CAPTURED: 6,
  DECLINED: 7,
  CAPTURED: 8,
  CHARGEDBACK: 9,
  IN_DISPUTE: 10,
};

module.exports = PaymentStatus;
