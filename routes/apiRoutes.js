const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("../helpers/uuid.js");
const router = express.Router();

const dbPath = path.join(__dirname, "..", "db", "db.json");

router.get("/notes", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the db.json file:", err);
      res.status(500).send("An error occurred on the server.");
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

router.post("/notes", (req, res) => {
  const newNote = { ...req.body, id: uuid() };
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the db.json file:", err);
      res.status(500).send("An error occurred on the server.");
      return;
    }
    const notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error("Error writing the db.json file:", err);
        return res.status(500).send("An error occurred on the server.");
      }
      res.setHeader("Content-Type", "application/json");
      res.send(newNote);
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id; // Extract the id of the note to be deleted

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the db.json file:", err);
      return res.status(500).send("An error occurred on the server.");
    }

    const notes = JSON.parse(data);
    const filteredNotes = notes.filter((note) => note.id !== noteId); // Remove the note with the specified id

    fs.writeFile(dbPath, JSON.stringify(filteredNotes, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the db.json file:", err);
        return res
          .status(500)
          .send("An error occurred while updating the database.");
      }
      res.status(204).send(); // No content to send back, but indicate success with status code 204
    });
  });
});

module.exports = router;
