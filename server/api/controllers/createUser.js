const User = require("../models/user");

const createUser = (req, res) => {
  const myNewUser = new User(req.body);

  myNewUser
    .save()
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = createUser;
