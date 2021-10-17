const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Workout = require("../../models/Workout");

router.get("/:ref", async (req, res) => {
  const workouts = await Workout.findOne({ id: req.params.ref });
  res.send(workouts);
});

module.exports = router;
