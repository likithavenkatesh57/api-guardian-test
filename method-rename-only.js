const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function listChargesForCustomer(customerID) {
  return stripe.charges.list({ customer: customerID });
}

modules.exports = { listChargesForCustomers };
