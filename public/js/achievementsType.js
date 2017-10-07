
function achievementType(name, description, id, achieved, dateAchieved) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.achieved = achieved;
    this.dateAchieved = dateAchieved;
}

var a1 = new achievementType("Created First Task","YAY, created your first task",1,false,new Date());
var a2 = new achievementType("Created First Event","YAY, created your first event",2,false,new Date());
var a3 = new achievementType("Completed First Task","YAY, you completed your first task",3,false,new Date());
var a4 = new achievementType("Completed All Tasks","YAY, you completed all the tasks in your task list",4,false,new Date());
var a5 = new achievementType("Speedster","Woah, you completed a task before it was due",5,false, new Date());

var allAchievements = [a1,a2,a3,a4,a5];
