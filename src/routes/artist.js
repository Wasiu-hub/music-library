const express = require("express");
const artistRouter = express.Router();
const artistController = require("../controllers/artist");

// Define a POST route that connects to the createArtist controller function
artistRouter.post("/", artistController.createArtist);
artistRouter.get("/", artistController.getAllArtists);
artistRouter.get("/:id", artistController.getArtistById);

module.exports = artistRouter;
