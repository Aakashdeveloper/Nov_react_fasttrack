var express = require('express');
var port = 8900;
var app = express()

app.get('/',(req,res) => {
    res.send("This is home page")
})

app.get('/movies',(req,res)  => {
    res.send("This is movies page")
})

app.listen(port,(err) => {
    if(err) throw err;
     console.log("server is running on the port "+port)
})