// login logic here
const jwt = require("jsonwebtoken");
const keys = require("../utils/config");
const User = require("../models/user");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const makeToken = user => {
  const payload = {
    sub: user._id,
    user: user.username
  };

  const options = { expiresIn: "4h" };
  return jwt.sign(payload, keys.mysecret, options);
};

const localStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) done(err);
    if (!user) done(null, false);
    user.checkPassword(password, (err, isMatch) => {
      if (err) done(err);
      if (isMatch) {
        const { _id, username } = user;
        return done(null, { _id, username });
      }
      return done(null, false);
    });
  });
});

const authenticate = passport.authenticate("local", { session: false });

const login = (req, res) => {
  res.json({ token: makeToken(req.user), user: res.user });
};

module.exports = { login, authenticate, localStrategy };
