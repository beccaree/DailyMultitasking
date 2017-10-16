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
    allday: Boolean,
    hasDate: Boolean
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
