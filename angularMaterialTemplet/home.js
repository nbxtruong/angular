var app = angular.module('application', ['ngMaterial']);

app.controller('controller', function($scope, $mdBottomSheet) {
    $scope.openBottomSheet = function() {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>' +
            'Hello! <md-button ng-click="closeBottomSheet()">Close</md-button>' +
            '</md-bottom-sheet>'
        })

// Fires when the hide() method is used
.then(function() {
    console.log('You clicked the button to close the bottom sheet!');
})

// Fires when the cancel() method is used
.catch(function() {
    console.log('You hit escape or clicked the backdrop to close.');
});
};

$scope.closeBottomSheet = function($scope, $mdBottomSheet) {
    $mdBottomSheet.hide();
}

});