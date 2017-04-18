ThesisApp.controller('SignupController', ['$scope', '$http',  '$location', function($scope, $http,$location) {
  $scope.user = {};
  $scope.signup = function() {
  //$scope.user= angular.copy(user);
   //console.log("yes I'm being called");
    //console.log($scope.user);

    $http.post('http://thesis-app.dev/signup', $scope.user, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).success(function(response) {
          console.log($scope.user);
        })
        .success(function(response){
          $location.path("/events/");
        })
  .error(function() {
        console.log("their was an error");
    });
  }

}]);
ThesisApp.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location, $window) {
$scope.user = {
  email: $scope.email,
  password: $scope.password
};
$scope.login = function() {
  $http.post('http://thesis-app.dev/login', $scope.user, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).success(function(response) {
  console.log($scope.user);
})
.success(function(response){
console.log("user logged in!");
console.log(response);
  $location.path("/events/");
})
.error(function() {
console.log("their was an error");
console.log(response);

});
}

}]);
