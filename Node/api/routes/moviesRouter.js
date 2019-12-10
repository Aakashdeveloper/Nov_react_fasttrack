var express = require('express');
var moviesRouter = express.Router()
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";



moviesRouter.route('/')
    .get((req,res)  => {
            mongodb.connect(url, (err,db) => {
                if(err){
                    res.status(401).send("Error in connecting")
                }else {
                    const dbo = db.db('classdatabase')
                    dbo.collection('movies').find({}).toArray(
                        (err,data)=>{
                            if(err){
                                res.status(401).send("Error in fetching")
                            }else{
                                res.setHeader('Access-Control-Allow-Origin','*')
                                res.setHeader('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type,Accept')
                                res.send(data)
                            }
                        }
                    )
                }
            })
})

moviesRouter.route('/:id')
    .get((req,res)  => {
        var id = req.params.id;
        mongodb.connect(url, (err,db) => {
            if(err){
                res.status(401).send("Error in connecting")
            }else{
                const dbo = db.db('classdatabase');
                dbo.collection('movies').findOne({_id:id}, (err,data)=>{
                    if(err){
                       throw err
                    } else {
                        res.send(data)
                    }
                })
            }
        })
})


module.exports = moviesRouter;