var express = require("express");

var app = express();
app.use(express.json());

app.get("/", function (req, res) {
  console.log(req);
  res.send("Olá Mundo");
});

app.post("/calculator/sum", function (req, res) {
  console.log(req.body);
  const sum = Number(req.body.valueA) + Number(req.body.valueB);
  console.log(sum);
  res.status(201).json({
    result: sum,
  });
});

app.listen(4000, function () {
  console.log("servidor rodando em http://localhost:4000");
});
