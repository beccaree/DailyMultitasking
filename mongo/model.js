var mongoose = require('mongoose');  //***

// Seems to be an outdated way of doing so, maybe correct this
mongoose.connect('mongodb://localhost/taskracer', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

//Mongoose definition is like a schema definition of a task
// Types ava here: http://mongoosejs.com/docs/schematypes.html
var taskschema = new mongoose.Schema({
    type: String,
    title: String,
    description: String,
    prio: Number,
    id: Number,
    done: Boolean,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    start: { type: Date, default: Date.now },
    end: { type: Date, default: Date.now },
    allday: Boolean
});

var task = mongoose.model('task', taskschema);
module.exports=task;

// If no tasks in DB insert a "dummy" one
var s = new task
s.type          = "task";
s.title         = "This is a title";
s.description   = "Hello I should be done now";
s.prio          = 2;
s.id            = 1;
s.done          = false;
s.created       = new Date;
s.updated       = new Date;
s.start         = new Date;
s.end           = new Date;
s.allday        = false;

task.find(function (err, d) {
    if (err) return next(err);
    if (d.length==0) s.save();
});

//achievement schema
var achievementSchema = new mongoose.Schema({
    name: String,
    description: String,
    id: Number,
    achieved: { type: Boolean, default: false},
    dateAchieved: { type: Date, default: Date.now },
});

var achievement = mongoose.model('achievements', achievementSchema);
module.exports = achievement;

// If no tasks in DB insert a "dummy" one
var a1 = new achievement
a1.name         = "Created First Task";
a1.description   = "YAY, created your first task";
a1.id            = 1;
a1.dateAchieved  = new Date;

var a2 = new achievement
a2.name         = "Created First Event";
a2.description   = "YAY, created your first event";
a2.id            = 2;
a2.dateAchieved  = new Date;

var a3 = new achievement
a3.name         = "Completed First Task";
a3.description   = "YAY, you completed your first task";
a3.id            = 3;
a3.dateAchieved  = new Date;

var a4 = new achievement
a4.name         = "Completed All Tasks";
a4.description   = "YAY, you completed all the tasks in your task list";
a4.id            = 4;
a4.dateAchieved  = new Date;

var a5 = new achievement
a5.name         = "Speedster";
a5.description   = "Woah, you completed a task before it was due";
a5.id            = 5;
a5.dateAchieved  = new Date;

achievement.find(function (err, d) {
    if (err) return next(err);
    if (d.length==0){
          a1.save();
          a2.save();
          a3.save();
          a4.save();
          a5.save();
    }
});
