var mongoose = require('mongoose');  //***

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
