angular.module("PrimerApp",[])
.controller("PrimerController",function($scope,$http){
  $scope.posts = [];
  $scope.newPost = {};
  $http.get("https://jsonplaceholder.typicode.com/posts")
  .success(function(data){
    $scope.posts = data;
  }).error(function(err){
    console.log(err);
  });
  $scope.agregarPost = function(){
    $http.post("https://jsonplaceholder.typicode.com/posts", {
      title: $scope.newPost.title,
      body: $scope.newPost.body,
      userId: 1
    }).success(function(){
      $scope.posts.push($scope.newPost);
      $scope.newPost = {};
    }).error(function(err){
      console.log(err);
    });
  };
});
