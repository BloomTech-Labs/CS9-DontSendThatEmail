// place for auth router
const router = require("express").Router();
const { login, authenticate, localStrategy } = require("../controllers/login");
const { protected, jwtStrategy } = require("../jwt/jwt");
const passport = require("passport");

passport.use(jwtStrategy);
passport.use(localStrategy);

router.route("/login").post(authenticate, login);

module.exports = router;
