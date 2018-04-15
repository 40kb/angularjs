var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function( $scope, $filter, $http ) {

  $scope.result;

  $http.get('https://api.pnd.gs/v2/feeds?limit=30&page=1&sort=latest&sources=frontEndFront')
    .success( function( req ) {
      $scope.result = req;
      console.log( req );
    })
    .error( function( data, status ) {
      console.log( data );
      console.log( status );
    });

}]);
