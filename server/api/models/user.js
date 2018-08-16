// place for user model
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 11;
const ObjectId = mongoose.Schema.Types.ObjectId;

//User Model Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  letters: [
    {
      type: ObjectId,
      ref: "Letter"
    }
  ]
});

//Add in Bcrypt for PW hashing
userSchema.pre("save", function(next) {
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function(plainTextPW, callback) {
  return bcrypt.compare(plainTextPW, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }
    callback(null, isValid);
  });
};

module.exports = mongoose.model("User", userSchema);
