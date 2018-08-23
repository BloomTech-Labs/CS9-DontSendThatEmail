// place for auth router
const router = require("express").Router();
const { login, authenticate, localStrategy } = require("../controllers/login");
const { protected, jwtStrategy } = require("../jwt/jwt");
const passport = require("passport");
const createUser = require("../controllers/createUser");
const updateUser = require("../controllers/updateUser");

// Use our strategies in the routes

passport.use(jwtStrategy);
passport.use(localStrategy);

// pass in createUser logic to post to register new user

router.route("/register").post(createUser);

// pass in authenticate (passport) and login from login.js to login the user

router.route("/login").post(authenticate, login);

router.route("/:id").put(protected, updateUser);

module.exports = router;
