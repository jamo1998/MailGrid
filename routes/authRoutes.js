const passport = require('passport');

//Arrow function that's called with our express app object,
//Inside the function body, we setup the different route handlers
//then immediately exported and referenced it inside our index.js
module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    }));

    app.get(
      '/auth/google/callback',
      passport.authenticate('google'),
      (req, res) => {
        res.redirect('/surveys');
      }
    );

    app.get('/api/logout', (req, res) => {
      //.logout() kills the entire cookie and logs the user out
      req.logout();
      res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });
};