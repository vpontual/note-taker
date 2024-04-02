console.log("This will be the server");

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//home page
//notes page
// get /api/notes
// get /api/notes/:id
// post /api/notes
// delete /api/notes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
