var application = angular.module('myLanguageApplication',[]);
application.controller('myLanguageController',function($scope){
	$scope.myLanguageFav='none';

	$scope.java=function(){
		myLanguageFav='java';
	};

	$scope.php=function(){
		myLanguageFav='php';
	};

	$scope.cpp=function(){
		myLanguageFav='cpp';
	};
});