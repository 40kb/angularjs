var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($scope, $log) {
  $log.info($scope);
})

// 假若我想minify文件的话会得到
// myApp.controller("mainController",function(a,b){b.info(a)});

// 但是运行这段压缩过的文件会出错!!
// 因为在压缩的适合压缩工具会把一些变量改变为更短的名字例如$scope -> a
// 但是在dependency injection的时候这样做改变变量名的话会出错!z

// 压缩文件在生产环境的时候是非常有必要的，那怎么去既要不影响DI的时候又去做文件压缩呢?
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $log.info($scope);
}]);

// 压缩之后会得到
myApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}]);

// 对比之前压缩的时候有什么变化 "$scope", "$log" 没有被minify
// 因为Minifyer不会改变string的内容!!($scope -> a, $log -> b 作为变量确实被改变了)

// angular的这一种dependency injection需要注意的是
// angular在扫描这行代码的时候会把'$scope'对应着function的第一个参数，inject进去
// $log会对应着function的第二个参数穿进去，以此类推

// 这个版本的DI，angular只会去查看function之前的array item，
// 来识别这个controller需要哪些services，
// 然后做一系列的动作去创建这些service再把它们inject进去!

// 这个版本的DI，angular就不会去扫描这个function的argument，来决定了需要哪些service了
// 所以这些需要的services和function arguments需要一一对应起来!!!
// function的参数名你可以随便命名都无所谓，但是最好是和你需要的services保持一样的名字

// 下面这个例子
// $scope service 对应的是$log这个变量，在controller里面$log指向的是$scope
// 可见function的参数名可以随意取名，service和参数名之间对应关系很重要!!
myApp.controller('mainController', ['$scope', '$log', function($log, $scope) {
  $log.info($scope);
}]);