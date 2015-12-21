angular.module("myMod", [])
	.controller("myCtrl", function($scope, $interval){

		$scope.randomWords = [
			"blue ",
			"red ",
			"green ",
			"pink ",
			"brown ",
			"grey ",
			"yellow ",
			"gold "
		];

		$scope.randomClass =[
			"spin",
			"font",
			"underlined",
			"red",
			"blue",
			"yellow",
			"square",

		];
		



//Add Random Words Button

		$scope.wordsOnPage = [];




		$scope.addUndecoratedWord = function (){
		var newElement ={}

		newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
		newElement.decor = "";
		$scope.wordsOnPage.push(newElement);
	}

//Add Random Decoration Button

		$scope.addDecoratedWord = function (){
		var newElement ={}

		newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
		newElement.decor = "underlined";
		$scope.wordsOnPage.push(newElement);
}
//Add Random Decoration Button

		$scope.addRandomStyle = function (){
		var newElement ={}

		newElement.word = $scope.randomClass[Math.floor(Math.random() * $scope.randomClass.length)];
		newElement.decor = $scope.randomClass[Math.floor(Math.random() * $scope.randomClass.length)];
		$scope.wordsOnPage.push(newElement);
}

// Randomize Function

		

		$scope.talk = function(){
			var functions = [$scope.addUndecoratedWord, $scope.addDecoratedWord, $scope.addRandomStyle];
			function rando(){
			  return functions[Math.floor(Math.random() * functions.length)]();
			}
			$interval(rando, 100, 50);
		};




	});


