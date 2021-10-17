const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
  routine_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  workouts: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("routine", RoutineSchema);
