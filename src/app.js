/* eslint-disable no-unused-vars */
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
