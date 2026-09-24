// checkout.js — TEST CASE 1: true positive, ambiguous migration.
// stripe.charges.create has two valid alternatives (paymentIntents vs
// checkout.sessions) in the ecosystem file, so this should route through
// fixSingleUsageVersioned and come back with a targetVersion + selectionReason,
// not a silent codemod swap.
 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function chargeCustomer(amountCents) {
  return stripe.charges.create({
    amount: amountCents,
    currency: 'usd',
    source: 'tok_visa', // Stripe's built-in test token, no real card involved
    description: 'Test purchase',
  });
}
 
module.exports = { chargeCustomer };
