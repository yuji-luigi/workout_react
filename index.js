const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4242;
app.listen(PORT, () =>
  console.log(`server is runnning http://localhost:${PORT}`)
);