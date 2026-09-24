// refunds.js — TEST CASE 2: blast radius + single-alternative migration.
// A separate flow from checkout.js, so a correct blast radius report should
// show two affected flows, not one. stripe.charges.retrieve has only one
// registered alternative ("Direct 1:1 replacement — always use this"), but
// Stripe never implements getCodemods, so this still goes through the AI
// model rather than a deterministic swap — worth confirming the returned
// fix is tagged "agent", not "codemod".
 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function lookupChargeForRefund(chargeId) {
  return stripe.charges.retrieve(chargeId);
}
 
module.exports = { lookupChargeForRefund };
