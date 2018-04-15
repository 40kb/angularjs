var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };


  // 手动去watch某个值是否发生了改变
  $scope.$watch('handle', function(newValue, oldValue) {
    console.info('Changed!');
    console.log('Old: ' + oldValue);
    console.log('New: ' + newValue);
  })

  // 下面code没在angular context
  setTimeout(function() {
    $scope.handle = 'newTwitterhandle';
    console.log('Scope changed!');
  }, 3000);
  // 观察3s之后$scope.handle 确实是改变了
  // 但是DOM并没有update! 为什么?
  // 因为setTimeout这个函数没有在angular context里面运行
  // 所以它无法触发digest loop，以此就不会去检查watcher lists


  // 怎么去处理这个问题?
  // 通过$scope.$apply()来处理
  /// $apply() 告诉angular hey: be sure to run your normal process
  setTimeout(function() {
    $scope.$apply(function() {
      $scope.handle = 'newTwitterhandle';
      console.log('Scope changed!');
    })
  }, 3000)
  // 3秒之后angular会run digest loop
  // check the watcher lists
  // and then update...


  // 那到底什么时候我需要要这个$apply()?
  // 比如上面这个例子，比如你需要用其它js lib的时候

  // 如果我不想通过$apply()的方式去处理，还有什么办法?
  // 像前面介绍过的，你可以把$timeout inject进来...
  // 然后用$timeout() service代替原生的setTimeout()
  // 这种方式其实angular在底层还是用$apply()，只不过它帮你做了不需要你自己做!


}]);

// $scope.handle 和$scope.lowercasehandle 在view里面使用到
// angular会把这两个东西加到watchers Lists里面
// 当event发生的时候，就会运行digest Loop

// digest loop会把watchers lists里面的所有watcher都检查遍
// 看看是否有某个watcher发生了变化


// angular提供了方法可以让你手动去watch某个值是否发生了改变
//
// 下面的例子：每次当handle的值发生变化的时候会运行这个callback函数
// 每次输入的时候观察console的变化
/**
$scope.$watch('handle', function(newValue, oldValue) {
  console.info('Changed!');
  console.log('Old: ' + oldValue);
  console.log('New: ' + newValue);
})
**/

// 注意的是Digest Loop只存在angular context里面!!
// what about you build don't inside the angular context?
// 例如下面的例子
/**
setTimeout(function() {
  $scope.handle = 'newTwitterhandle';
  console.log('Scope changed!');
}, 3000);
**/