const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

const validateUpdateEmail = ({ email, password }) => {
  let errors = {};
  email = !isEmpty(email) ? email : "";

  if (Validator.isEmpty(email)) {
    errors.email = "email is required";
  }

  if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateUpdateEmail;
