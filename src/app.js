var express = require('express');

var app = express();
app.use(express.json())

app.get("/",function(req,res){
    console.log (req)
    res.send("Olá Mundo")
})

app.post("/calculator/sum",function(req,res){
    console.log(req.body)
    res.status(201)
})
//                                localhost 
// Aplicação disponível em http://127.0.0.1:4000/
app.listen(4000,function(){console.log("servidor rodando em http://localhost:4000")});