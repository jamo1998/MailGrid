const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
//Call serializeUser with the user passed as argument to generate identifying information
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//Function to turn the user id into a user 
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            //Calls to the database, returns a promise
            const existingUser = await User.findOne({
                googleId: profile.id
            })
            if (existingUser) {
                //We already have a record with the givin profile ID
                return done(null, existingUser);
            }
            //We don't have a user record with this ID, make a new record
            const user = await new User({
                googleId: profile.id
            }).save();
            done(null, user);

        }
    )
);