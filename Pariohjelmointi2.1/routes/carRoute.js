const express = require("express");
const {
  getCars,
  addCar,
  updateCar,
  deleteCar,
  getCar,
} = require("../controllers/Controllers");

const router = express.Router();

// GET all cars
router.get("/", getCars);

// POST a new car
router.post("/", addCar);

// UPDATE a new car
router.patch("/:id", updateCar);

// DELETE car
router.delete("/:id", deleteCar);

// GET SINGLE car
router.get("/:id", getCar);

module.exports = router;
