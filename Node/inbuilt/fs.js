var fs = require('fs');

fs.writeFile('mytext.txt','nodejs async singlethread non blocking', function(err){
    if(err) throw err;
    else{
        console.log("Task Done")
    }
})

fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    else{
        console.log(data)
    }
})