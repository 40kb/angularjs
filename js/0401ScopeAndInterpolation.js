var myApp = angular.module('myApp', []);
// Interpolation
// creating a string by combining strings and placeholders.

// 例如：'My name is ' + name
// 结果：'My name is Tony'
// 这就是一个interpolated的例子


// whatever in the $scope become available in the views
// 在$scope里面的东西变量/值/函数...在views里都可以去获得

// 在你的controller
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

  // $scope object里面有name这个变量
  $scope.name = 'Tony';

  $timeout(function() {
    $scope.name = 'Everybody';
  }, 3000);
  // 等待3s后会发生什么情况?
  // 3s之后view的name的值会改变!
  // angular connecting '$scope' to the 'view'
  // angular直到view在用name这个变量，一旦当这个变量的值改变的时候
  // angular会自动帮你update view里面name的值，不用你手动去做!
  //
  // 这样很方便，你不用去再做任何的事情你只需要update你的data

}]);

// 你的view里面可以访问到这个name变量
// angular通过 {{}} -- interpolate 来取得变量的值
/**
 * <div ng-controller="mainController">
 *   <h1>Hello {{name}}!</h1>
 * </div>
 */