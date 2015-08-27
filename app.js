var app = angular.module('firebaseApp',['firebase']);

app.controller('FireBaseController',['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  $scope.markOff = function(item) {
    console.log(item);
    item.done = !item.done;
    $scope.list.$save(item).then(function() {
      // data has been saved to our database
    });

  };

    $scope.addTodo = function() {
      $scope.list.$add({
        task: $scope.todo,
        done: false
      });
    };

    var ref = new Firebase("https://glaring-inferno-4362.firebaseio.com/todo");
    $scope.list = $firebaseArray(ref);

    $scope.removeTodo =function(item) {
      $scope.list.$remove(item)
    };


  //$scope.usd = 1;
  //$scope.currency = 'bitcoin';
  //
  //$scope.calculate();


//console.log($scope.currency);
////$scope.bitcoinPrice = $scope.data.bitcoin.bid;
//$scope.data.$loaded()
//  .then(function() {
//
//  })
//  .catch(function(err) {
//    console.error(err);
//  });




}])