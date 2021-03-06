var app = angular.module('addApp', []);

app.controller('modifyCtrl', function ($scope) {
    $scope.bookData = [
        { name: 'java', author: 'tom', id: '0' },
        { name: 'cpp', author: 'anna', id: '1' }
    ];

    $scope.editingData = {};
    length = $scope.bookData.length;

    for (var i = 0; i < length; i++) {
        $scope.editingData[$scope.bookData[i].id] = false;
    }

    $scope.modify = function (tableData) {
        $scope.editingData[tableData.id] = true;
    };


    $scope.update = function (tableData) {
        $scope.editingData[tableData.id] = false;
    };

    $scope.addRow = function () {
        $scope.bookData.push({
            name: $scope.inputBook,
            author: $scope.inputAuthor,
            id: $scope.bookData.length + 1

        });
    }

    $scope.removeRow = function (index) {
        $scope.bookData.splice(index, 1);
    };
});