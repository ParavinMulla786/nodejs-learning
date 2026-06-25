const express = require('express');
const app = express()

app.use(express.json());

app.get('/', function(req, res){
    res.send("It is Working!!")
});


app.listen(3000, function(){
console.log("It IS running!");
});