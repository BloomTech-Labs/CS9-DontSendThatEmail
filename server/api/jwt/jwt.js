// JWT strategy here
const { ExtractJwt } = require("passport-jwt");
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const keys = require("../utils/config.env");
const User = require("../models/user");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.mysecret
};

const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .select("-password")
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err =>
      // handle error
      done(err, false)
    );
});

const protected = passport.authenticate("jwt", { session: false });

module.exports = { jwtStrategy, protected };
