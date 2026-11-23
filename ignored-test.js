const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function oldlookup(id) {
  return sripe.paymentIntents.retrieve(id);
}

module.exports = { oldLookup };
