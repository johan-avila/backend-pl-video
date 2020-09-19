const express = require("express");

const app = express();
const { config } = require("./config/index");

app.get("/", (req, res) => {
  if (req.query.year % 100 === 0 && req.query.year % 4 === 0) {
    console.log("Es bisiesto");
  } else if (req.query.year % 100 !== 0 && req.query.year % 4 === 0) {
    console.log("Es bisiesto");
  } else {
    console.log("No es bisiesto");
  }
  res.send();
});

app.listen(config.port, () => {
  console.log(`listen on http://localhost:${config.port}`);
});

app.get("/json", (req, res) => {
  res.json({ hola: "mundo" });
});
