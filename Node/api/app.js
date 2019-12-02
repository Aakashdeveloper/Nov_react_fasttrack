var express = require('express');
var port = 8900;
var app = express();
var moviesRouter = require('./routes/moviesRouter')
var artistRouter = require('./routes/artistRouter');

app.get('/',(req,res) => {
    res.send("This is home page")
})

app.use('/movies', moviesRouter)
app.use('/artist', artistRouter)

app.listen(port,(err) => {
    if(err) throw err;
     console.log("server is running on the port "+port)
})