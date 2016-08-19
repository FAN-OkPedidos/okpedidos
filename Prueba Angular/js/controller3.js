angular.module("PrimerApp",[])
  .controller("PrimerController",function($scope){
      $scope.todo = [];
      $scope.newAct = {};

      $scope.agregarAct = function(){
        $scope.todo.push($scope.newAct);
        console.log($scope.newAct);
        $scope.newAct = {};
      };
  });
