iPag SDK for Node.js

A ferramenta certa para efetuar a sua integração de forma rápida e segura com os serviços iPag.

> Este projeto foi convertido do [iPag SDK for PHP](https://github.com/ipagdevs/ipag-sdk-php) usando o Google Gemini.

### Observação

Este SDK, não necessariamente, reflete todos dos recursos e funcionalidades disponíveis na API do iPag. Veja a documentação completa da API em [https://developers.ipag.com.br/](https://developers.ipag.com.br/).

## Instalação

Execute em seu shell:

    npm install ipag-sdk-node

## IpagClient

Classe responsável pela integração com a API do iPag. Através dela você consegue acessar todos os endpoints disponíveis na API.

> Para mais informações de como funciona a autenticação no Ipag, consulte: [Autenticação Ipag](https://developers.ipag.com.br/pt-br/auth)

### Autenticação

```javascript
const { IpagClient, IpagEnvironment } = require('ipag-sdk-node');

const ipagClient = new IpagClient(
    'apiID',
    'apiKey',
    IpagEnvironment.SANDBOX
);
```

## Exemplos

### Venda Direta

```javascript
const { PaymentTransaction, PaymentTypes, Cards } = require('ipag-sdk-node');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '12345679',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 4,
        card: {
            holder: 'Bruce Wayne',
            number: '4111111111111111',
            expiry_month: '01',
            expiry_year: '2025',
            cvv: '123'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Tokenizar um Cartão

```javascript
const { Token } = require('ipag-sdk-node');

const token = new Token({
    card: {
        holder: 'Bruce Wayne',
        number: '4111111111111111',
        expiry_month: '01',
        expiry_year: '2025',
        cvv: '123'
    }
});

ipagClient.token().create(token)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Autorização para Validação do Cartão (Zero-Auth)

```javascript
const { PaymentTransaction, PaymentTypes, Cards } = require('ipag-sdk-node');

const paymentTransaction = new PaymentTransaction({
    amount: 0,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '12345679',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 1,
        card: {
            holder: 'Bruce Wayne',
            number: '4111111111111111',
            expiry_month: '01',
            expiry_year: '2025',
            cvv: '123'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Venda usando os Dados do Cartão

```javascript
const { PaymentTransaction, PaymentTypes, Cards } = require('ipag-sdk-node');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '12345679',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 1,
        card: {
            holder: 'Bruce Wayne',
            number: '4111111111111111',
            expiry_month: '01',
            expiry_year: '2025',
            cvv: '123'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Venda usando o Card Token

```javascript
const { PaymentTransaction, PaymentTypes, Cards } = require('ipag-sdk-node');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '12345679',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 1,
        card: {
            token: 'TOKEN_DO_CARTAO'
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Venda usando os Dados do Cartão e retornando o Card Token

```javascript
const { PaymentTransaction, PaymentTypes, Cards } = require('ipag-sdk-node');

const paymentTransaction = new PaymentTransaction({
    amount: 100,
    callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
    order_id: '12345679',
    payment: {
        type: PaymentTypes.CARD,
        method: Cards.VISA,
        installments: 1,
        card: {
            holder: 'Bruce Wayne',
            number: '4111111111111111',
            expiry_month: '01',
            expiry_year: '2025',
            cvv: '123',
            tokenize: true
        }
    },
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    }
});

ipagClient.payment().create(paymentTransaction)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Criar um Plano de Assinatura

```javascript
const { SubscriptionPlan, Interval } = require('ipag-sdk-node');

const subscriptionPlan = new SubscriptionPlan({
    name: 'Plano de Assinatura',
    amount: 100,
    interval: Interval.MONTHLY,
    frequency: 1,
    trial_period: 30
});

ipagClient.subscriptionPlan().create(subscriptionPlan)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

### Criar uma Assinatura para um Cliente

```javascript
const { Subscription } = require('ipag-sdk-node');

const subscription = new Subscription({
    plan_id: 'ID_DO_PLANO',
    customer: {
        name: 'Bruce Wayne',
        cpf_cnpj: '490.558.550-30'
    },
    card: {
        token: 'TOKEN_DO_CARTAO'
    }
});

ipagClient.subscription().create(subscription)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
```

## Licença

[The MIT License](https://github.com/ipagdevs/ipag-sdk-node/blob/master/LICENSE)

## Documentação

[Documentação Oficial](https://developers.ipag.com.br)

## Dúvidas & Sugestões

Em caso de dúvida ou sugestão para o SDK abra uma nova [Issue](https://github.com/ipagdevs/ipag-sdk-node/issues).