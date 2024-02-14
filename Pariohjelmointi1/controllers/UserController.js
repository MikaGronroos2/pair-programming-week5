const User = require("../models/User");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Get all users error. error message in console" });
    console.log(err.message);
  }
};

// Add user
const addUser = async (req, res) => {
  const { username, email, password, firstName, lastName, age } = req.body;
  if (!username || !email || !password || !firstName || !lastName || !age) {
    return res.status(400).json({ error: "Please include all fields" });
  }
  try {
    const newUser = await User({
      username,
      email,
      password,
      firstName,
      lastName,
      age,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Add user Failed. error message in console" });
    console.log(err.message);
  }
};

// Get user by Id
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Juuseria ei löyvy" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Get user by id failed, check console." });
    console.log(err.message);
  }
};

// Delete user

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }
  res.status(200).json({ message: "deleted user" });
};

// Patch user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Update user failed, check console." });
    console.log(err.message);
  }
};

module.exports = {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
};
