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
                                res.send(data)
                            }
                        }
                    )
                }
            })
})

moviesRouter.route('/details')
    .get((req,res)  => {
        res.send("This is movies details page")
})


module.exports = moviesRouter;