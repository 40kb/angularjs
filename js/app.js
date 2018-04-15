// ['ngMessages'] 里面的意思把这个module inject 进来，这个myApp依赖这个ngMessages模块
// 如果还依赖其它模块也是按这样的方式inject进来
// 当然，在html文件里面是需要把对应的module文件引进来的!

// 同样的把ngResource也inject进来
// 注意有些module是也提供了作为service去使用的.
// 例如这ngResource，要把$resource inject到controller里面
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);


// 定义controller
myApp.controller('mainController', function($log, $scope, $filter, $resource) {

  // 这个$scope object就是这个controller和对应的view之间的data的存放地方!
  // 你可以在这个$scope里面定义任何的JS东西
  // Angular做的双向数据绑定也会存在这个$scope object里面
  $scope.name = 'Jane Doe';
  $scope.occupation = 'Coder';
  $scope.getname = function() {
    return 'John Doe';
  }

  // service传入的顺序是无所谓的
  console.log($log);
  console.log($scope)
  console.log($filter);

  // use $filter service
  $scope.formatname = $filter('uppercase')($scope.name);

  // use $log service
  $log.info($scope.formatname);


  //
  $log.info($resource);

});


// Angular是怎么做Dependency Injection?
// angular是如何决定去创建$scope并且把它inject到controller里面?
//
// 当你传参数给controller的时候Angular会怎么做处理?
// 例如下面这个例子
var searchPeople = function($scope, lastName, height, age, occupation) {
  return 'Jane Doe';
}

// 这个东西你基本上是用不到的
console.log( angular.injector().annotate(searchPeople));

// 会得到 ["$scope", "lastName", "height", "age", "occupation"]
// Angular看到你把$scope传了进来，angular知道这个$scope是什么东西应该做什么
// 然后就会根据angular预设定的steps去创建这个$scope object，
// 然后把这个$scope object inject进这个controller里面!

// Angular提供的其它所有的service运作方式也是跟这个$scope是一模一样的!
// 注意service传入的顺序是无所谓的