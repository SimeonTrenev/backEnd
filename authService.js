const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET } = require("./config");

const register = (username, password) => {
  let user = new User({ username, password });

  return user.save();
};

const login = async (email, password) => {
  let user = await User.findOne({ email });
  if (!user) throw new Error("User does not exist!");
  let areEqual = await bcrypt.compare(password, user.password);
  if (!areEqual) throw new Error("Passwords does not match!");

  let token = jwt.sign({ _id: user._id, email: user.email }, SECRET);

  return token;
};

module.exports = {
  register,
  login,
};
