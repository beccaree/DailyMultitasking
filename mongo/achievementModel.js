var mongoose = require('mongoose');  //***

//achievement schema
var achievementSchema = new mongoose.Schema({
    name: String,
    description: String,
    id: Number,
    achieved: { type: Boolean, default: false},
    dateAchieved: { type: Date, default: Date.now }
});

var achievement = mongoose.model('achievements', achievementSchema);
module.exports = achievement;

// If no tasks in DB insert a "dummy" one
var a1 = new achievement
a1.name         = "Created First Item";
a1.description   = "YAY, created your first item";
a1.id            = 1;
a1.dateAchieved  = new Date;

var a3 = new achievement
a3.name         = "Completed First Task";
a3.description   = "YAY, you completed your first task";
a3.id            = 2;
a3.dateAchieved  = new Date;

var a4 = new achievement
a4.name         = "Completed All Tasks";
a4.description   = "YAY, you completed all the tasks in your task list";
a4.id            = 3;
a4.dateAchieved  = new Date;

var a5 = new achievement
a5.name         = "Speedster";
a5.description   = "Woah, you completed a task before it was due";
a5.id            = 4;
a5.dateAchieved  = new Date;

achievement.find(function (err, d) {
    if (err) return next(err);
    if (d.length==0){
        a1.save();
        a3.save();
        a4.save();
        a5.save();
    }
});
