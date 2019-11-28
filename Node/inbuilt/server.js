var http = require('http');
var fs = require('fs');
var port  = 7800

var server = http.createServer(function(req,res){
    fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        res.write("<h1>welcome to node js</h1>");
        res.end()
    })
    /*res.write("Welcome to nodejs");
    res.end();*/
})


server.listen(port,function(){
    console.log("server is running on port "+port)
})