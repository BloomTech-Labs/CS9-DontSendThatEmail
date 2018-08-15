// main server file
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./api/utils/config").mongoURI;
const authRouter = require("./api/routers/authRouter");

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`\n====  connected to mongo ====\n`))
  .catch(() => console.log(`error connecting to mongo`));

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n=== API running on http://localhost:${PORT} ===\n`);
});
