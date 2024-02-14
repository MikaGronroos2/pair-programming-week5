const Car = require("../models/carModel");

// Get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Get all cars error. error message in console" });
    console.log(err.message);
  }
};

// Add Car
const addCar = async (req, res) => {
  const { make, model, year, color, price } = req.body;
  if (!make || !model || !year || !color || !price) {
    return res.status(400).json({ error: "Please include all fields" });
  }
  try {
    const car = await Car({
      make,
      model,
      year,
      color,
      price,
    });
    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).json({ error: "Add car Failed. error message in console" });
    console.log(err.message);
  }
};

// Get user by Id
const getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Autoo ei löyvy" });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Get car by id failed, check console." });
    console.log(err.message);
  }
};

// Delete car

const deleteCar = async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    return res.status(400).json({ error: "Ei oo tollasta autoo" });
  }
  res.status(200).json({ message: "auto poistettu" });
};

// Patch user
const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ error: "Auto ei löydy :( " });
    }
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: "Update car failed, check console." });
    console.log(err.message);
  }
};

module.exports = {
  getCars,
  addCar,
  updateCar,
  deleteCar,
  getCar,
};
