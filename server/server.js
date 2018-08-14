// main server file
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/toneapp")
  .then(() => console.log(`\n====  connected to mongo ====\n`))
  .catch(() => console.log(`error connecting to mongo`));

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n=== API running on http://localhost:${PORT} ===\n`);
});
