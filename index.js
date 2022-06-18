const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Iam inside docker!");
});

//
app.listen(port, () => {
  console.log(`Express server listening at port   ${port}`);
});
