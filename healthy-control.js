// healthy-control.js — TEST CASE 3: the important one.
// Uses ONLY the current, non-deprecated PaymentIntents API. Since
// getPatterns() matches on the coarse string "stripe.paymentIntents" and
// Stripe's analyzeImpact() can never return "enhancement", the pipeline's
// own structure does not stop this at stage 4 — the only thing standing
// between this file and an unwanted "fix" is the AI model choosing
// "no_change" after reading the changelog. This file exists to find out
// whether that backstop actually holds.
 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function createModernPayment(amountCents) {
  return stripe.paymentIntents.create({
    amount: amountCents,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
  });
}
 
module.exports = { createModernPayment };
