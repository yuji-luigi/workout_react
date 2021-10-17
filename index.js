require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const routines = require("./routes/api/routines");
const workouts = require("./routes/api/workouts");

// const seedWorkouts = require("./seedWorkouts");
// const seedRoutine = require("./seedRoutines");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log(error));

app.use("/api/routines", routines);
app.use("/api/workouts", workouts);

// seedRoutine();
// seedWorkouts();

// Set static folder
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
//   });
// }
// app.use(express.static(path.join(__dirname, "frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
// });

const PORT = process.env.PORT || 4242;
app.listen(PORT, () =>
  console.log(`server is runnning http://localhost:${PORT}`)
);
