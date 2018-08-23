const User = require("../models/user");

const updateUser = (req, res) => {
  let { password } = req.body;
  User.findOne({ _id: req.user._id }, function(err, user) {
    if (err) {
      res.status(404).json(err.message);
    }

    if (password && password.length > 4) {
      user.password = password;
    } else {
      res.status(500).json({ error: "Password is too short or empty" });
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
