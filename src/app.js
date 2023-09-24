/* eslint-disable no-unused-vars */
const express = require("express");
const artistRouter = require("./routes/artist"); // Import the artistRouter

const app = express();
// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Use the artist router for routes starting with '/artists'
app.use("/artists", artistRouter); // directs all artists to artistController

module.exports = app;
