const express = require("express");
const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/UserController");

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST a new phonebook
router.post("/", addUser);

// UPDATE a new phonebook
router.patch("/:id", updateUser);

// DELETE phonebook
router.delete("/:id", deleteUser);

// GET SINGLE phonebook
router.get("/:id", getUser);

module.exports = router;
