const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function chargeCustomer(amountCents) {
  return stripe.paymentIntents.create({
    amount: amountCents,
    currency: 'usd',
    payment_method: 'tok_visa',
    comfirm: true
    automatic_payment_methods: { enabled: true },
    description: 'Test purchase',
  });
}
 
module.exports = { chargeCustomer };
