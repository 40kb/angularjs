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

// 创建自己的service
myApp.service('nameService', function() {
  // 这个function里面包含的是这个service你要存放的property/method的object
  var self = this;
  self.name = 'John Doe';
  self.namelength = function() {
    return self.name.length;
  }
});

// 现在你创建了一个service, 怎么去用这个nameService?
// 在你controller里面怎么去访问你的service?
// 用法和你用angular提供的service一样 -- inject到controller里面


myApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService) {


  $scope.name = nameService.name;
  // 这个时候每一次改变$scope.name的时候并不会更新nameService.name
  // 因为digest loop只会去检查$scope object
  //
  // 所以要手动添加一个$watch去当$scope.name改变的时候去更新到nameService.name
  // 注意一点就是这两个controller都有做同样的动作!!!
  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  })



  $log.log(nameService.name);
  $log.log(nameService.namelength());

  // OK, 那现在你知道怎么去创建service了，知道怎么在controller里面access你的service了
  // 那问题来了，用这个service有什么好处? 我什么时候应该用它?

  // 在传统的页面里
  // 你从A页面跳转到B页面会失去掉你在A页面里的所有的存放的数据!
  // 但是当我在SPA里面，尽管我从'A页面'跳到'B页面'
  // 这个时候i still inside the same javascript memory space
  // 这些在'A'页面里的数据我依旧能访问得到
  //
  // 这就意味着我能在不同的页面之间共享数据，
  // 这个时候我可以用service来收集这些不同页面不同controller共享的数据

  // **demo一个例子A, B这两个页面同步name这个值来回同步！做到不同页面之间同步数据

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {

  $scope.name = nameService.name;
  // 所以要手动添加一个$watch去当$scope.name改变的时候去更新到nameService.name
  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  })


  $scope.num = $routeParams.num || 1;

}]);


// 同样的在用service的时候你会经常听到factory/providers
// factory的用法和service几乎是一样!

// 需要查阅资料详细关于factory/providers