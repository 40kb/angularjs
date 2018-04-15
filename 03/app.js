var myApp = angular.module('myApp', []);

myApp.controller('mainController', function( $scope ) {

  console.log( $scope ) //=> 会出现什么？ -- 我们并没有定义$scope

});
