var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  // routeProvider会做什么?
  // 当routeProvider看到某些thing在hash里面就知道应该做什么!
  $routeProvider

    // 意思是
    // 当我在URL里面看到 '/' 这个fragment在hash里面
    // 我就用 'pages/main.html' 作为template
    // 然后用 'mainController' 作为这个template的controller
    // 把 'pages/main.html' 这个文件与 'mainController' 连接起来!
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

    // 这里有一个问题
    // 我们的index.html怎么去get这两个文件(main.html/second.html)?

    // 我们之前接触的index.html view都是长这样
    // controller 写在相应的view html里面
    /**
    <div class="container">
        <div ng-controller="mainController"></div>
    </div>
    **/

    // 但是这个时候我们已经使用了ngRoute
    // $routeProvider 帮我们把相应的view和controller连接起来

    // 我们需要把不同的template根据不用的hash来load到index.html里面
    // 所以index.html需要某个地方，当JS把template拉过来的时候知道该放到那里
    // angular提供了"ng-view"来表示这个地方

    // 所以index.html会长成这样
    /**
    <div class="container">
      <div ng-view></div>
    </div>
    **/



    // OK现在你知道 '/', '/second' 代表一个page
    // 假若我想给一个page value怎么办? 像我们熟悉的query string
    // 例如：/second?balala
    // 在SPA里面你怎么去做?

    // angular Routing提供了一种方法用 -- '/:num'
    // '/:num' -- 这里是pattern matching
    // '/:num/something/:id' -- 你想要怎样的pattern都可以
    //
    // 意思是i am going looking '/second' something in the '/:num'
    // 然后去会去找存放在:num里面的值

    // :num 或者 :id 或者 :something
    // 会存放在$routeParams object里面
    // :num => $routeParams.num
    // :id  => $routeParams.id
    // :something => $routeParams.something
    // 可以把$routeParams inject到controller里面
    //
    // 这样可以根据不同的parameter来做不同的东西!
    // 同样可以赋值给$scope object这样view也能访问到parameter的值

    // 当然外边还有很多优秀的router lib， 它们的运作方式和这个是一样的!


    // 为什么SPA那么受追捧?
    // 可以加入animation
    // 可以提升用户体验
    // 可以提高加载速度
    // 可以不用刷新页面(刷新页面需要重新download很多东西)
    //
    // SPA在某个条件下只download a piece of data，more faster
});


myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  // angular 提供了方法来获取hash里面的值
  $log.info($location.path());
  $scope.name = 'Main';


}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {

  // angular 提供了方法来获取hash里面的值
  $log.info($location.path());
  $scope.name = 'Second';

  $scope.num = $routeParams.num;

  // 同样可以利用JavaScript || operator来设置默认值
  $scope.num = $routeParams.num || 1;


}]);