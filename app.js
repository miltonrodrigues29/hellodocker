const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express server running Inside Docker container");
});
