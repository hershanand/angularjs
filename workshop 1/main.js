var myApp = angular.module('Lesson03', []);

myApp.controller('MyController', function(){
	var self = this;
	self.isEditing = false;
	//Click edit button
	self.setEdit = function(){
		self.isEditing = true;
		//Copy static input into edit object
		self.userEdit = angular.copy(self.user);
	};
	//Click cancel button
	self.cancelEdit = function(){
		self.isEditing = false;
		//Copies stored user back to edit
		self.userEdit = angular.copy(self.user);
	};
	
	self.save = function(){
		self.isEditing=false;
		//Replace user object with edited form
		self.user = angular.extend(self.userEdit);
	};
	//Set user information
	self.user = {
		first: "Hersh",
		last: "Anand"
	};
	
	
});
