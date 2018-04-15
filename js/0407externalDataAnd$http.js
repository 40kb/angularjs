// The $http Service

var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  }


  // 这些数据在真实情况下通常来时database
  // 这里面包括了很多item你想把它们列出来
  // 可以使用ng-repeat="item in items"
  // $scope.rules = [
  //   { rulename: 'Must be 5 characters' },
  //   { rulename: 'Must be 5 characters bbb' },
  //   { rulename: 'Must be 5 characters ccc' },
  // ]



  // 数据来自服务器端API
  // 用$http service的方式 -- 提供了get数据/post数据的方法
  // $http.get()
  // $http.post()


  // $http.get('去哪个URL拉数据')
  $http.get('https://api.github.com/users/angularjs')
    .success(function(result) {
      console.log(result)
      $scope.rules = result;
    })
    .error(function(data, status) {
      // error comes here
      console.log(data);
    });


  // 有时候你需要send/post data到服务器
  $scope.newRule = '';
  $scope.addRule = function() {

    // $http.post('post去哪个URL', post什么内容，通过JS Object形式{ key: 你的内容 })
    $http.post('/api', { newRule: $scope.newRule })
      .success(function(result) {
        // 会返回updated之后的新内容!
        $scope.rules = result;

        // 因为view在'监视'着newRule这个值，
        // 所以等你post数据完了之后需要把这个值清掉
        $scope.newRule = '';

      })
      .error(function(data, status) {
        console.log(data);
      })
  }


}])