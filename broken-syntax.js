const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function brokenFunction(amountCents) {
  return stripe.charges.create({
    amount: amountCents,
    currency: 'usd'
