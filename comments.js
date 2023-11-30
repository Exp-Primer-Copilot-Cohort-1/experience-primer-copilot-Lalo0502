// Create web server

var express = require('express');
var router = express.Router();
var db = require('../models/db');
var Comment = db.Comment;

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
    Comment.find({}, function(err, docs) {
        if (err) {
            res.send('Error');
        } else {
            res.send(docs);
        }
    });
});

router.get('/add', function(req, res, next) {
    var comment = new Comment({
        title: 'Title',
        content: 'Content'
    });

    comment.save(function(err) {
        if (err) {
            res.send('Error');
        } else {
            res.send('Success');
        }
    });
});

router.get('/delete', function(req, res, next) {
    Comment.remove({}, function(err) {
        if (err) {
            res.send('Error');
        } else {
            res.send('Success');
        }
    });
});

module.exports = router;