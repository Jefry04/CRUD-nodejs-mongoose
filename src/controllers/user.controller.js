const User = require("../models/user.model");

module.exports = {
  // Get- List

  list(req, res) {
    User.find()
      .then((user) => {
        res.status(200).json({ message: "Users found", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "Users not found" });
      });
  },

  show(req, res) {
    const { userId } = req.params;

    User.findById(userId)
      .then((user) => {
        res.status(200).json({ message: "User found", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "User dosn`t exist" });
      });
  },

  // create - Post

  create(req, res) {
    const data = req.body;
    const newUser = {
      ...data,
    };

    User.create(newUser)
      .then((user) => {
        res.status(201).json({ message: "Create user", data: user });
      })
      .catch((err) => {
        res.status(400).json({ message: "Error create user", data: err });
      });
  },

  update(req, res) {
    const { userId } = req.params;

    User.findByIdAndUpdate(userId, req.body, { new: true })
      .then((user) => {
        res.status(200).json({ message: "User update", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "User dosn`t update" });
      });
  },

  destroy(req, res) {
    const { userId } = req.params;

    User.findByIdAndDelete(userId)
      .then((user) => {
        res.status(200).json({ message: "User Delete", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "User dosn`t delete" });
      });
  }
};
