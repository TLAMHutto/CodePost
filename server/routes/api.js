const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');
const db = 'mongodb+srv://keatonhutto8:d1141@codepost.igcsloi.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log('Error connecting to MongoDB');
    }
    else{
        console.log('Connected to MongoDB');
    }
});

router.get('/posts', function(req, res){
    console.log('Get posts');
    post.find({})
    .exec(function(err, posts){
        if(err){
            console.log('Error getting posts');
        }
        else{
            res.json(posts);
            console.log(posts)
        }
    })
})

module.exports = router;