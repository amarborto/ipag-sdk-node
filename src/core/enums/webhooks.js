const Webhooks = {
  PAYMENT_LINK_PAYMENT_SUCCEEDED: 'PaymentLinkPaymentSucceeded',
  PAYMENT_LINK_PAYMENT_FAILED: 'PaymentLinkPaymentFailed',
  SUBSCRIPTION_PAYMENT_SUCCEEDED: 'SubscriptionPaymentSucceeded',
  SUBSCRIPTION_PAYMENT_FAILED: 'SubscriptionPaymentFailed',
  CHARGE_PAYMENT_SUCCEEDED: 'ChargePaymentSucceeded',
  CHARGE_PAYMENT_FAILED: 'ChargePaymentFailed',
  TRANSACTION_CREATED: 'TransactionCreated',
  TRANSACTION_WAITING_PAYMENT: 'TransactionWaitingPayment',
  TRANSACTION_CANCELED: 'TransactionCanceled',
  TRANSACTION_PRE_AUTHORIZED: 'TransactionPreAuthorized',
  TRANSACTION_CAPTURED: 'TransactionCaptured',
  TRANSACTION_DENIED: 'TransactionDenied',
  TRANSACTION_DISPUTED: 'TransactionDisputed',
  TRANSACTION_CHARGEDBACK: 'TransactionChargedback',
  TRANSFER_PAYMENT_SUCCEEDED: 'TransferPaymentSucceeded',
  TRANSFER_PAYMENT_FAILED: 'TransferPaymentFailed',
};

module.exports = Webhooks;
