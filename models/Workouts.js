const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    Type: String,
    required: true,
  },
  keyword: {
    Type: Array,
  },
  image: {
    Type: String,
    required: true,
  },
  category: Array,
  muscle: Array,
  description: String,
  variation_byLevel: {
    Type: Array,
    required: true,
  },
});

module.exports = mongoose.model("workout", workoutSchema);
