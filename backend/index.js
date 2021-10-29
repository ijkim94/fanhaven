require("dotenv").config();

const { client } = require("./db/client");
const express = require("express");
const server = express();
const cors = require("cors");

const apiRouter = require("./api");

server.use(cors());
server.use(express.json());

server.use("/api", apiRouter);

server.listen(process.env.PORT || 3000, () => {
  client.connect();
  console.log("The server is up on port");
});
