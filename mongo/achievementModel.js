var mongoose = require('mongoose');  //***

//achievement schema
var achievementSchema = new mongoose.Schema({
    name: String,
    description: String,
    congratulatoryMessage: String,
    id: Number,
    achieved: { type: Boolean, default: false},
    dateAchieved: { type: Date, default: Date.now }
});

var achievement = mongoose.model('achievements', achievementSchema);
module.exports = achievement;

// If no tasks in DB insert a "dummy" one
var a1 = new achievement
a1.name         = "Creator";
a1.description  = "Create your first item";
a1.congratulatoryMessage   = "Good Job, you created your first item";
a1.id            = 1;
a1.dateAchieved  = new Date;

var a2 = new achievement
a2.name         = "One Down";
a2.description   ="Complete your first task";
a2.congratulatoryMessage   ="Good Job, you completed your first task";
a2.id            = 2;
a2.dateAchieved  = new Date;

var a3 = new achievement
a3.name         = "All Star";
a3.description   = "Complete all the tasks in your task list";
a3.congratulatoryMessage   = "Good Job, you completed all the tasks in your task list";
a3.id            = 3;
a3.dateAchieved  = new Date;

var a4 = new achievement
a4.name         = "Speedster";
a4.description   = "Complete task before it is due";
a4.congratulatoryMessage = "Good Job, you completed a task before it was due";
a4.id            = 4;
a4.dateAchieved  = new Date;

var a5 = new achievement
a5.name         = "Gimme Five";
a5.description   = "Complete at least one task, five days in a row";
a5.congratulatoryMessage = "You re on fire !!! thats a five day streak";
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
