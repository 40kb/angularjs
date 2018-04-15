// how to creating a directive?
// why you need to create a directive?


var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main2.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second2.html',
      controller: 'secondController'
    })

});


myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {}]);

// 创建自己的directive
myApp.directive('searchResult', function() {

  // this function return the directive
  return {
    // 当我在view里面看到<search-result>的时候
    // 我都会把下面的template内容append进去
    template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',

    // 如果有设replace: true, 默认为false
    // 每次我在view里面看到<search-result>的时候
    // 都会用template的值把<search-result>替换掉!
    replace: true
  }

});