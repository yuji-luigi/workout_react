const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "frontend/public")));

const PORT = process.env.PORT || 4242;
app.listen(PORT, () =>
  console.log(`server is runnning http://localhost:${PORT}`)
);
