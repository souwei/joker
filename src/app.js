var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.get("/jokes", (req, res) => {
  res.status(200).send("The original joke");
});

var server = app.listen(3000, () => {
  var port = server.address().port;
  console.log("Example app listening at port %s", port);
});

module.exports = server;
