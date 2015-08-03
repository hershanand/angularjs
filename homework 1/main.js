var myApp = angular.module('homework1', []);

myApp.controller('MyController', function(){
	var self = this;
	self.display = false;
	//Theme object
	self.theme = {
		color: ["default", "red", "blue", "orange", "yellow", "purple"]
	};
	//console.log(self.theme.choice);
	//Part 2: folders
	self.list = {
	kPersonal: [{
		item: 'Item 1'
	}],
	kBusiness: [{
		item: 'Business Item'
	}],
	kSports: [{
		item:'Sports Item'
	}]
	};
	
	self.hide = function(){
		self.display=self.check;
	};
	
	self.folders = [
		{name: 'Personal',
		files: ['test']},
		{name: 'Work',
		files: ['test2']},
		{name: 'Trips',
		files: ['test3']
		}];
	
	self.userSelection = self.folders[0];

	self.addItem = function(userInput){
		self.userSelection.files.push(userInput);
		self.userInput = undefined;
	};

});