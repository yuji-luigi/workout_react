const mongoose = require("mongoose");
const Routine = require("./models/Routine");

const routines = [
  {
    title: "HIIT for Him",
    type: "Push",
    routine_id: "1",
    image: "/images/dumbells.jpg",
    workouts: [1, 2, 3],
  },

  {
    title: "Upperbody Evolution",
    type: "Upperbody",
    routine_id: "2",
    image: "/images/dumbells.jpg",
    workouts: [1, 2, 3],
  },
  {
    title: "Pullday Routine!!",
    type: "pullday",
    routine_id: 3,
    id: "today",
    image: "/images/dumbells.jpg",
    workouts: [1, 2, 3],
  },
];

const seedRoutines = () => {
  routines.forEach(async (routine) => {
    const newRoutine = await new Routine(routine);
    await newRoutine.save((e) => console.log(e));
  });
};

module.exports = seedRoutines;
