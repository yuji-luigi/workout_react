const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  keyword: {
    type: Array,
  },
  image: {
    type: String,
    required: true,
  },
  category: Array,
  muscle: Array,
  description: String,
  variation_byLevel: [
    {
      level: String,
      name: String,
      description: String,
      video: String,
      sets: Number,
      reps: Number,
      repdone: Number,
      restTime: Number,
      image: String,
    },
  ],
});

module.exports = mongoose.model("workout", workoutSchema);
