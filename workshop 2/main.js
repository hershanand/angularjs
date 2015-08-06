var myApp = angular.module('workshop2', []);

myApp.factory('Student', function(CalculateAverage) {
	function Student(){
		this.name="hersh";
		this.assignments=[];
		this.average=0;
		this.grade=undefined;
		this.pass=undefined;
	}
	Student.prototype.addAssignment = function(uAssign, uGrade) {	
		var myAssignment = {
			name: uAssign,
			score: uGrade,
		};
	this.assignments.push(myAssignment);
		
	this.average = CalculateAverage.calcAvg(this.assignments);
	this.grade = CalculateAverage.calcGrade(this.average);
	this.pass = CalculateAverage.calcPass(this.grade);
	};
	
	return Student;
});

myApp.service('CalculateAverage', function(gradeMapper){
	var self = this;
	self.calcAvg = function(elementsArray){
		var total=0;
		for(var i=0; i<elementsArray.length;i++){
			total += elementsArray[i].score;
		}
		return total/elementsArray.length;
	};
	self.calcGrade = function(avgGrade){
		var letter;
		if (avgGrade < 50) {
			letter = "F";
		}
		else {
			letter = "A";
		}
		return letter;
	};
	self.calcPass = function(grade){
		return gradeMapper[grade];
	};
});

myApp.value('gradeMapper', {
	A: "Passing",
	F: "Failing"
});

myApp.controller('MyController', function(Student){
	var self = this;

	self.student = new Student();
	
});