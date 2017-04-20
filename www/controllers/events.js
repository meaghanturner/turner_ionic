ThesisApp.controller('ListController', ['$scope', '$http', '$ionicLoading',function($scope, $http, $ionicLoading){
    $scope.loadInfo = function(){
       // $ionicLoading.show(); //start spinner
       $http.get("http://thesis-app.dev//events/")
      //$http.get("http://thesis-app.dev/events/") //get route to test paste into browser
        .success(function(response){
          //console.log (response);
          $scope.event = response;
          })
            .finally(function(){
            $scope.$broadcast('scroll.refreshComplete');
        });
}
$scope.loadInfo();
}]);

//VIEW ONE
ThesisApp.controller('DetailsController',['$scope', '$http', '$ionicLoading', '$routeParams','$location', function($scope, $http, $ionicLoading, $routeParams,$location){
$ionicLoading.show(); //show spinner, show user app is still working
//console.log($routeParams.id); //which list item user clicks

  $http.get("http://thesis-app.dev//events/"+$routeParams.id)
  .success(function(response){
    $scope.event = response;

$ionicLoading.hide(); //hide/stop spinner
});
//console.log($routeParams.id); //which list item user clicks
$scope.delete = function() {
  $http.delete("http://thesis-app.dev//events/delete/"+$routeParams.id)
  .success(function(response){
    $scope.delete = response;
    console.log('item deleted!');
    $location.path("#/events");

  }).error(function(response) {
        console.log('something is wrong!');
    });

}
}]);

//POST FORM
ThesisApp.controller('FormController', ['$scope', '$http', '$location' ,function($scope, $http, $location) {
  $scope.newEvent = {};
  $scope.save = function() {

    $http.post('http://thesis-app.dev//events/posts', $scope.newEvent, { headers: {'X-Requested-With': 'XMLHttpRequest'}})
    .success(function(response) {
          console.log(response);
            $location.path("#/events");
        })
  .error(function(response) {
        console.log(response);
    });
  }
}]);


//EDIT FORM
// ThesisApp.controller('UpdateController',['$scope', '$http', '$ionicLoading', '$routeParams', function($scope, $http, $ionicLoading, $routeParams){
// // $ionicLoading.show(); //show spinner, show user app is still working
// //console.log($routeParams.id); //which list item user clicks
//
//   $http.get("http://thesis-app.dev/events/edit/"+$routeParams.id)
//   .then( function(response){
//    // console.log('get info');
//     console.log(response);
//     $scope.editEvent = response.data;
//
//   // .error(function(response) {
//   //       console.log("not working");
//   //   });
// });
//
// }]);

// //UPDATE FORM
// ThesisApp.controller('UpdateController', ['$scope', '$http', function($scope, $http) {
//   $scope.editEvent = {};
//   $scope.update = function() {
//     //$scope.newEvent= angular.copy(event);
//     // console.log("yes I'm being called");
//     // console.log($scope.newEvent);

//     $http.post('http://thesis-app.dev/events/posts', $scope.newEvent, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).success(function(response) {
//           console.log(response);
//         })
//   .error(function(response) {
//         console.log(response);
//     });
//   }

// }]);
