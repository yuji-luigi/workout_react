const mnongoose = require("mongoose");
const schema = mongoose.Schema;

const RoutineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
