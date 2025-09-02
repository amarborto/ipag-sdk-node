const Client = require('./client');
const IpagEnvironment = require('./ipagEnvironment');
const HttpClient = require('../http/client/httpClient');
const JsonSerializer = require('../io/jsonSerializer');

const ChargeEndpoint = require('../endpoint/chargeEndpoint');
const CheckoutEndpoint = require('../endpoint/checkoutEndpoint');
const CustomerEndpoint = require('../endpoint/customerEndpoint');
const EstablishmentEndpoint = require('../endpoint/establishmentEndpoint');
const PaymentEndpoint = require('../endpoint/paymentEndpoint');
const PaymentLinksEndpoint = require('../endpoint/paymentLinksEndpoint');
const SellerEndpoint = require('../endpoint/sellerEndpoint');
const SplitRulesEndpoint = require('../endpoint/splitRulesEndpoint');
const SubscriptionEndpoint = require('../endpoint/subscriptionEndpoint');
const SubscriptionPlanEndpoint = require('../endpoint/subscriptionPlanEndpoint');
const TokenEndpoint = require('../endpoint/tokenEndpoint');
const TransactionEndpoint = require('../endpoint/transactionEndpoint');
const TransferEndpoint = require('../endpoint/transferEndpoint');
const VoucherEndpoint = require('../endpoint/voucherEndpoint');
const WebhookEndpoint = require('../endpoint/webhookEndpoint');

class IpagClient extends Client {
  constructor(apiID, apiKey, environment, logger = null, version = IpagEnvironment.VERSION) {
    super(
      new IpagEnvironment(environment),
      new HttpClient({
        headers: {
          'x-api-version': version,
        },
        auth: {
            username: apiID,
            password: apiKey
        }
      }),
      new JsonSerializer(),
      logger
    );
  }

  customer() {
    return new CustomerEndpoint(this, this);
  }

  subscriptionPlan() {
    return new SubscriptionPlanEndpoint(this, this);
  }

  subscription() {
    return new SubscriptionEndpoint(this, this);
  }

  transaction() {
    return new TransactionEndpoint(this, this);
  }

  token() {
    return new TokenEndpoint(this, this);
  }

  charge() {
    return new ChargeEndpoint(this, this);
  }

  establishment() {
    return new EstablishmentEndpoint(this, this);
  }

  transfer() {
    return new TransferEndpoint(this, this);
  }

  paymentLinks() {
    return new PaymentLinksEndpoint(this, this);
  }

  webhook() {
    return new WebhookEndpoint(this, this);
  }

  seller() {
    return new SellerEndpoint(this, this);
  }

  splitRules() {
    return new SplitRulesEndpoint(this, this);
  }

  voucher() {
    return new VoucherEndpoint(this, this);
  }

  checkout() {
    return new CheckoutEndpoint(this, this);
  }

  payment() {
    return new PaymentEndpoint(this, this);
  }
}

module.exports = IpagClient;
