// provenance-edge-case.js — TEST CASE 4: provenance is file-scoped, not
// line-scoped. require('stripe') below is a real anchor, so per
// classifyProvenance(), ANY matched pattern anywhere in this file counts
// as "resolved" — including the mention below, which is inside a comment
// and never actually executes. Expect this usage to be misclassified as
// "resolved" even though it should honestly be "text". Also worth checking
// whether the "low" confidence flag (set purely because the line starts
// with "//") actually stops anything downstream — based on the code
// reviewed so far, nothing reads it.
 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
// old approach was stripe.charges.create, replaced below
async function chargeCustomerModern(amountCents) {
  return stripe.paymentIntents.create({
    amount: amountCents,
    currency: 'usd',
  });
}
 
module.exports = { chargeCustomerModern };
