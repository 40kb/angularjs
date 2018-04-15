var myApp = angular.module('myApp', []);
// Directive:
// an instruction to angularJS to manipulate a piece of the DOM.
// EX: this could be 'add a class', 'hide this', 'create this', etc..
//
// 在现在为止接触的directive例如: ng-app, ng-controller

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle = '';

  // 结合$filter service
  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  }

}]);


/**
 <div ng-controller="mainController">
   <label for="">What is your twitter handle?</label>
   <input type="text" ng-model="handle">

   <h1>twitter.com/{{ handle }}</h1>
 </div>
**/

// ng-modal 在的意思是把这个view里的这个element和controller里面的$scope
// 里面的某个变量绑在一起，这个例子里是把这个<input>和$scope.handle绑在一起!
// angular知道当这个<input>的值发生改变的时候
// 会自动的更新$scope.handle变量的值 (one way binding)

// 同时view里面也用到{{handle}}这个变量里面的值 -- interpolation
// angular同时也知道一旦这个值在controller里发生变化的话，
// 会自动把这个值更新到view上面 (another way binding)

// 而这两种data binding合在一起同时作用就是angular提供的'two way data binding'


// 那么angular是如何/怎么实现做data binding的?