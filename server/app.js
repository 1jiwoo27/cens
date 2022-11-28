const express = require('express');
const app = express();

app.listen(4000, function () {
  console.log('listening on 4000');
});

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chris!");
  console.log("My name is...");
});

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true,
};

app.use(cors(corsOptions));