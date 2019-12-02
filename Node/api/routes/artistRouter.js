var express = require('express');
var artistRouter = express.Router()
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


artistRouter.route('/')
    .get((req,res)  => {
        res.send("This is artist page")
})

artistRouter.route('/details')
    .get((req,res)  => {
        res.send("This is artist details page")
})


module.exports = artistRouter;