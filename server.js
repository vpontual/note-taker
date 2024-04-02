console.log("This will be the server");

const express = require("express");
const routes = require("./routes/api/index");

const app = express();
const port = process.env.PORT || 3001;

//middlewares

//routes
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
