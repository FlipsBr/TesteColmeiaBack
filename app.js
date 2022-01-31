require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./api/Database/mongoConfig");
const port = 3001;
const upload = require("./api/Routes/routes");

connection();

app.listen(port, console.log(`Listening on port ${port}...`));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(upload);

/*app.post("/imageUpload", (req, res) => {
  console.log("bateu.");
  console.log(req);
  res.sendStatus(202);
});*/

app.get("/test", (req, res) => {
  res.send("teste");
});
