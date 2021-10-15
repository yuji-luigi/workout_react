const mnongoose = require("mongoose");
const schema = mongoose.Schema;

const RoutineSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    Type: String,
    required: true,
  },
  image: {
    Type: String,
    required: true,
  },
  workouts: {
    Type: Array,
    required: true,
  },
});

module.exports = Routines = mongoose.model("routine", RoutineSchema);
