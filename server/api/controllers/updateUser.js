const User = require("../models/user");
const validateUpdateInput = require("../../validation/update");
const validateUpdateEmail = require("../../validation/updateEmail");
const validateUpdatePassword = require("../../validation/updatePassword");

const updateUser = (req, res) => {
  if (req.body.email && req.body.password) {
    const { errors, isValid } = validateUpdateInput(req.body);
    if (!isValid) return res.status(400).json(errors);
  } else if (req.body.email) {
    const { errors, isValid } = validateUpdateEmail(req.body);
    if (!isValid) return res.status(400).json(errors);
  } else {
    const { errors, isValid } = validateUpdatePassword(req.body);
    if (!isValid) return res.status(400).json(errors);
  }
  User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) {
      res.status(404).json(err.message);
    }

    user.save(function(err, returnData) {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.send(user);
    });
  });
};

module.exports = updateUser;
