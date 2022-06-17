const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Iam inside docker!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening at port http://0.0.0.0:${port}`);
});
