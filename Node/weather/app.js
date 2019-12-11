var express = require('express');
var app = express();
var port = 9000;
var request = require('request');
var ApiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";



function getWeather(ApiUrl){
    var option = {
        url: ApiUrl,
        header: {
            'User-Agent':'request'
        }
    };

    return new Promise((resolve,reject)=>{
        request.get(option,(err,res,body)=>{
            if(err){
                reject(err)
            }else{
                resolve(body)
            }
        })
    })
}

app.get('/weatherWithPromise',(req,res)=>{
    var out = getWeather(ApiUrl)
    out.then(JSON.parse)
        .then((result)=>{
            res.send(result)
        })
})



app.get('/weather', (req,res) => {
    request(ApiUrl, (err,response,body) => {
        if(err){
            throw err
        }else{
            var output = JSON.parse(body);
            res.send(output)
        }
    })
})

app.listen(port, (err) => {
    if(err) throw err;
    console.log('Server is running on port '+ port)
})