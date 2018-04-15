// common directives
// 其它常见的directives，我们已经学习了像ng-app, ng-controller, ng-model

// Directives 是定义用来modify/touch a piece of DOM
// 可以让你去控制DOM

var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  }

  // 配合view里面ng-if使用
  // ng-if="这是是JS expression"
  $scope.characters = 5;


  // ng-show的用法和ng-if一样
  // ng-show="JS expession"
  // angular通过控制css ng-hide类来隐藏元素

  // 和ng-show对应的是ng-hide
  // 用法和ng-show一模一样

  // ng-class="{这里是JSON，key为css类: value为JS表达式true/false来决定是否用这个类}"


  // 这些数据在真实情况下通常来时database
  // 这里面包括了很多item你想把它们列出来
  // 可以使用ng-repeat="item in items"
  $scope.rules = [
    { rulename: 'Must be 5 characters' },
    { rulename: 'Must be 5 characters bbb' },
    { rulename: 'Must be 5 characters ccc' },
  ]


  // ng-click呼叫这个function
  // 像类似ng-click的directive又ng-keydown, ng-keypress..等等
  $scope.alertClick = function() {
    alert('clicked');
  }

  $scope.name = 'byer';
  // ng-cloak
  // 假若在你的view里面有
  // <div class="alert"> {{ name }} </div>
  // 注意的是browser从server download 的是上面这一行代码
  // 然后JS/angular再接管把需要name的值拉过来
  // 一旦当你的网络很慢的时候，用户那端可能会有一小段时间1-2s看到的就是上面这一行代码
  // 对用户来说会显得有点奇怪
  // angular 提供了一个directive叫ng-cloak来处理这个问题
  // ng-cloak的意思是说我会隐藏{{ name }}这个东西，直到angular来处理它再显示出来


  // 以上只是一些最最常用的directives
  // 更多去angularjs.org查看文档

}])