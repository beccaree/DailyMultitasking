
function achievementType(name, description, congratulatoryMessage, id, achieved, dateAchieved) {
    this.name = name;
    this.description = description;
    this.congratulatoryMessage = congratulatoryMessage;
    this.id = id;
    this.achieved = achieved;
    this.dateAchieved = dateAchieved;
}

console.log("load achievementType");



var a1 = new achievementType("Taskmaker","Create your first task","Good Job, you created your first task",1,false,new Date());
var a2 = new achievementType("Event planner","Create your first event","YAY, created your first event",2,true,new Date());
var a3 = new achievementType("One Down","Complete your first task","YAY, you completed your first task",3,false,new Date());
var a4 = new achievementType("All Star","Complete all the tasks in your task list","YAY, you completed all the tasks in your task list",4,false,new Date());
var a5 = new achievementType("Speedster","Complete task before it is due","Woah, you completed a task before it was due",5,false, new Date());
var a6 = new achievementType("Gimme Five","Complete at least one task, five days in a row","You re on fire !!! thats a five day streak",5,false, new Date());

var allAchievements = [a1,a2,a3,a4,a5,a6];
