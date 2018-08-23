const User = require("../models/user");

const updateUser = (req, res) => {
  let { email, password } = req.body;
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (err) {
      console.log(err);
      return;
    }
    if (password) user.password = password;
    if (email) user.email = email;
    user.save(function(err, returnData) {
      if (err) {
        console.log(err);
        return;
      }
      res.send("Update successfull");
    });
  });
};

module.exports = updateUser;
