var express = require('express');
var router = express.Router();
var task = require('../../mongo/achievementModel');


router.get('/', function(req, res, next) {
    //res.render('pages/index', { title: 'TaskRacer' });
  //  res.render('pages/tasks', { title: 'tasks' });

    task.find(function (err, t) {
        if (err) return next(err);

        res.writeHead(200, {'Content-Type': 'text/html'});
        for(i in t){
            res.write('name: '          +t[i].name              + ", " );
            res.write('description: '   +t[i].description       + ", " );
            res.write('id: '            +t[i].id                + ", " );
              res.write('achieved: '    +t[i].achieved          + ", " );
            res.write('dateAchieved: '  +t[i].dateAchieved      + ", " );
        }
        res.end();
        //res.json(t);
    });

});


router.post('/', function(req, res, next) {
    task.create(req.body, function (err, post) {
        //    console.log(req.body);
        if (err) return next(err);
        //res.send();
        //res.json(post);
    });

    task.find(function (err, t) {
        if (err) return next(err);

        res.writeHead(200, {'Content-Type': 'text/html'});
        for(i in t){
            res.write('type '           +t[i].type              + ", " );
            res.write('title: '         +t[i].title             + ", " );
            res.write('description: '   +t[i].description       + ", " );
            res.write('prio: '          +t[i].prio              + ", " );
            res.write('tasknumber: '    +t[i].tasknumber        + ", " );
            res.write('created: '       +t[i].created           + ", " );
            res.write('updated: '       +t[i].updated           + "<br/>" );
        }
        res.end();
        //res.json(t);
    });

});

module.exports = router;
