var homeModule = angular.module('homeModule', []);

homeModule.controller('checkInputCtrl', ['$scope', function ($scope) {
	$scope.defaultInfor = { name: 'truong', age: 25 };

	$scope.resetInfor = function() {
		$scope.exampleInfor = angular.copy($scope.defaultInfor);
	};

	$scope.resetInfor();
}])