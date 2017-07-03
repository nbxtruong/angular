var application=angular.module('myApplication',[]);
application.controller('myController',function($scope){

	$scope.bookData = [
		{book: 'data', author: 'tom'},
		{book: 'history', author: 'anna'}
	];

	$scope.addRow=function(){
		$scope.bookData.push({
		book: $scope.inputBook,
		author: $scope.inputAuthor
		});
	}

	$scope.removeRow = function(index){
		$scope.bookData.splice(index, 1);
	};

	$scope.modify = function(tableData){
		$scope.modifyField = true;
		$scope.viewField = true;
	};


	$scope.update = function(tableData){
		$scope.modifyField = false;
		$scope.viewField = false;
	};
});