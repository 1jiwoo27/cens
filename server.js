const express = require('express');
const app = express();

app.listen(4000, function () {
  console.log('listening on 4000');
});

//CORS 해결
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chris!");
  console.log("My name is...");
});

