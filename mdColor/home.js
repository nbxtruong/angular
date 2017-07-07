var app = angular.module('application', ['ngMaterial']);
app.controller('controller', function($scope, $mdColors) {
    $scope.color = $mdColors.getThemeColor('red-700-0.8');
});