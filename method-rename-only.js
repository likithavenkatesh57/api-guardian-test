const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function listChargesForCustomer(customerID) {
  return stripe.paymentIntents.list({ customer: customerID });
}

modules.exports = { listChargesForCustomers };
