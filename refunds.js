const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function createCustomerWithCard(email, name, cardToken) {
  return stripe.customers.create({
    email,
    name,
    source: cardToken,
  });
} 
module.exports = { createCustomerWithCard };
