const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 
async function createCustomerWithCard(email, name, cardToken) {
  return stripe.customers.create({
    email,
    name,
    payment_method: cardToken,
  });
} 
module.exports = { createCustomerWithCard };
