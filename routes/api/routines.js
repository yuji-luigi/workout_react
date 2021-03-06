const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const Workout = require("../../models/Workout");
const Routine = require("../../models/Routine");
let workoutUrl = `http://localhost:4242/api/workouts/`;

if (process.env.NODE_ENV === "production") {
  workoutUrl = `https://reactworkoutbeta.herokuapp.com/api/workouts/`;
}

router.get("/:id", async (req, res) => {
  const routine = await Routine.findOne({ routine_id: req.params.id });
  const pendingWorkouts = routine.workouts.map(async (ref) => {
    try {
      const res = await fetch(workoutUrl + ref);
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  });
  const workouts = await Promise.all(pendingWorkouts);
  const workoutIds = workouts.map((key) => {
    return key.id;
  });
  res.send({ workouts, routine, workoutIds });
});

module.exports = router;
