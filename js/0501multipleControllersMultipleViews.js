var myApp = angular.module('myApp', []);

// 每一个独立的controller控制相对应的view
// 每一个独立的controller有自己独立的$scope object
// 这个概念在SPA里面非常重要
myApp.controller('mainController', ['$scope', function($scope) {

  $scope.name = 'Main';

}]);


// 每一个独立的controller控制相对应的view
// 每一个独立的controller有自己独立的$scope object
// 这个概念在SPA里面非常重要
myApp.controller('secondController', ['$scope', function($scope) {

  $scope.name = 'Second';

}]);

// angular怎么做到的?