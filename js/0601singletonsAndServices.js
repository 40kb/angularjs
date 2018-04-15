// Singleton:
// the one and only copy of an object

// is pattern in OOP -- mean i only have one object ever
// 例如:
// 假若你有Person object
//  -- 实例化出来Laura obect
//  -- 实例化出来Steve obect
//  -- 实例化出来Tony obect

// 但你说你有一个singleton object的时候
// 你只会存在一个singleton 这个object, 不会用来创建更多的object!
// 使用singleton可以省掉很多内存空间

// 在用angular service的时候你会经常听到singleton
// 因为service实现了singleton，一个service就是一个singleton object

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

});


myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  // 这个controller和下面一个controller都inject了$log service
  // 这里证明它是一个singleton，这两个controller inject进来的$log是同一个object
  $log.main = 'Property from main';
  $log.log($log);

  // 打来browser devtool看看结果 -- 可以看到这两个inject进来的$log service是同一个object


  // 那么$scope也是一个service，也是inject到controller里面
  // 那$scope也是一个singleton?
  // 用同样的办法可以证明$scope并不是一个singleton -- 这是service的一个特例!
  //
  // $scope in angular是作为child $scope被inject里面
  // 所以每个controller里面会有自己的一个$scope object
  // 而这个child $scope都是inheritance of root $scope
  // 而root $scope是attach on your app

  // 所以说每个app都有一个root $scope，而每一个controller里面inject进来的$scope
  // 都是root $scope的一个child $scope


  // 同样的当你去创建一个你自己的service, 你也同样是创建一个singleton
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {

  $log.second = 'Property from second';
  $log.log($log);

}]);