var application = angular.module('myLanguageApplication',[]);
application.controller('myLanguageController', function($scope){
	$scope.myFavLanguage='none';

	$scope.php=function(){
		$scope.myFavLanguage='php';
	};

	$scope.java=function(){
		$scope.myFavLanguage='java';
	};
});