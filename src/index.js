const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  res.send("Teste olá");
});
app.get("/alguma-coisa", (req, res) => {
  res.send("alguma coisa");
});
app.get("/", (req, res) => {
  const array = [1, 2, 3, 4, 5, 6];
  res.send(array);
});

app.listen(3000);
