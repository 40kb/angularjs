// The XMLHTTPRequest Object

var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  }


  // 这些数据在真实情况下通常来时database
  // 这里面包括了很多item你想把它们列出来
  // 可以使用ng-repeat="item in items"
  $scope.rules = [
    { rulename: 'Must be 5 characters' },
    { rulename: 'Must be 5 characters bbb' },
    { rulename: 'Must be 5 characters ccc' },
  ]

  // 数据来自服务器端API
  // XMLHttpRequest() build in browsers，最开始是IE的idea
  // 这个Object的意思是可以通过JS go out and get data!
  var rulesrequest = new XMLHttpRequest();
  relesrequest.onreadystatechange = function() {

    /**
    if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
      // 通常我们只需要responseText里面的数据
      // console.log(rulesrequest.responseText)

      // JS提供了JSON.parse()来把数据处理成JSON的格式
      // JSON.parse(rulesrequest.responseText);

      // 把处理后的输入放在$scope object里面只有views的对应controller就可以访问
      $scope.rules = JSON.parse(rulesrequest.responseText);
    }
    **/

    $scope.apply(function() {
      if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
        // 通常我们只需要responseText里面的数据
        // console.log(rulesrequest.responseText)

        // JS提供了JSON.parse()来把数据处理成JSON的格式
        // JSON.parse(rulesrequest.responseText);

        // 把处理后的输入放在$scope object里面只有views的对应controller就可以访问
        $scope.rules = JSON.parse(rulesrequest.responseText);
      }
    })

  }

  // 使用XMLHttpRequest() 提供的 'GET' 方式
  // 去访问 'https://api.github.com/users/angularjs'
  // 同时是通过true--asynchronous异步的方式 还是 false--synchronous同步的方式
  rulesrequest.open('GET', 'https://api.github.com/users/angularjs', true);

  // 然后发送这个请求
  rulesrequest.send();


  // 注意这个时候
  // 但是DOM并没有update! 为什么?
  // 因为XMLHttpRequest()这个object没有在angular context里面运行
  // 所以它无法触发digest loop，以此就不会去检查watcher lists

  // 怎么去处理?
  // 通过$scope.$apply()来处理
  // $apply() 告诉angular hey: be sure to run your normal process


  // 但是问题来了当你每一次需要go out the browser and get data的时候
  // 都需要去手动去完成上面四步
  // 1.创建一个新的 new XMLHttpRequest()
  // 2.监听 onreadystatechange
  // 3.打开链接 open
  // 4.把这次请求发送出去 send

  // 反复重复着4步很烦对不对？
  // 当然你也可以创建function去把这些步骤wrap起来...
  // 你想到的，angular已经帮你做了 -- angular提供了$http service，angular的方式去拉数据


}])