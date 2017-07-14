var homeApp = angular.module('homeApp', []);

homeApp.controller('homeCtrl', function ($scope, editingService, addService) {
    if (localStorage.bookData) { //Pull data from Local Storage if it exists
        $scope.bookData = JSON.parse(localStorage.bookData);
    } else { //Create one if it does not exist
        $scope.localBookData = [
            { name: 'java', author: 'tom', id: '0' },
            { name: 'cpp', author: 'anna', id: '1' }
        ];
        localStorage.bookData = angular.toJson($scope.localBookData, true);
    }

    $scope.editingData = {};

    editingService.editingFunction($scope.bookData, $scope.editingData);


    $scope.modify = function (tableData) {
        $scope.editingData[tableData.id] = true;
    };


    $scope.update = function (tableData) {
        $scope.editingData[tableData.id] = false;
    };

    $scope.addRow = function () {
        // $scope.bookData.push({
        //     name: $scope.inputBook,
        //     author: $scope.inputAuthor,
        //     id: $scope.bookData.length + 1

        // });
        addService.addFunction($scope.bookData, $scope.inputBook, $scope.inputAuthor, $scope.bookData.length + 1);
    }

    $scope.removeRow = function (index) {
        $scope.bookData.splice(index, 2);
    };
});

homeApp.service('editingService', function () {
    this.editingFunction = function (bookData, editingData) {
        for (var i = 0; i < bookData.length; i++) {
            editingData[bookData[i].id] = false;
        }
    }
});

homeApp.service('addService', function () {
    this.addFunction = function (bookData, name, author, id) {
        bookData.push({
            name: name,
            author: author,
            id: id

        });
    }
});