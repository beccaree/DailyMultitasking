var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Load the definition on the task
var task = require('../../mongo/model.js');

/* GET /tasks listing. */
router.get('/task/', function(req, res, next) {
    task.find(function (err, task) {
        if (err) return next(err);
        res.json(task);
    });
});

/* GET /tasks/id */
router.get('/task/:id', function(req, res, next) {
    task.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* POST /tasks */
router.post('/task/', function(req, res, next) {
    task.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /tasks/:id */
router.put('/task/:id', function(req, res, next) {
    task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //console.log(req.body)
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /tasks/:id */
router.delete('/task/:id', function(req, res, next) {
    task.findByIdAndRemove(req.params.id, req.body, {new: true}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


// This is achievements
// Load the definition on the task
var achievement = require('../../mongo/achievementModel.js');

/* GET /tasks listing. */
router.get('/achievement/', function(req, res, next) {
    achievement.find(function (err, task) {
        if (err) return next(err);
        res.json(task);
    });
});

/* GET /tasks/id */
router.get('/achievement/:id', function(req, res, next) {
    achievement.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* POST /tasks */
router.post('/achievement/', function(req, res, next) {
    achievement.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /tasks/:id */
router.put('/achievement/:id', function(req, res, next) {
    achievement.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        //console.log(req.body)
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /tasks/:id */
router.delete('/achievement/:id', function(req, res, next) {
    achievement.findByIdAndRemove(req.params.id, req.body, {new: true}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
