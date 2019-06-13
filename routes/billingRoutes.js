const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  //This request handler is where we want to add the logic
  //that handles the token, reaches out to the stripe API then finalizes the charge
  //then updates the users number of credits
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      //we need to specify the amount property again to confirm the amount we are charging the user on the backend
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      //specify the id property from the token object inside the source property with req.body.id
      source: req.body.id
    });
    //Reference the user model with req.user and add 5 credits
    req.user.credits += 5;

    //Save the user with user.save and update the user model
    const user = await req.user.save();

    //Respond to the request with the updated user to the browser
    res.send(user);
  });
};