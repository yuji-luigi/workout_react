const express = require("express");
const path = require("path");
const app = express();

// Set static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4242;
app.listen(PORT, () =>
  console.log(`server is runnning http://localhost:${PORT}`)
);
