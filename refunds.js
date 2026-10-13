const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function lookupChargeForRefund(chargeId) {
  return stripe.paymentIntents.retrieve(chargeId);
}
 
module.exports = { lookupChargeForRefund };
