const fb = require("express").Router();

// Helper function to generate unique ids
const uuid = require("../helpers/uuid");

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

//Hello World
app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = fb;
