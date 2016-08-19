angular.module("PrimerApp",["LocalStorageModule"])
  .controller("PrimerController",function($scope,localStorageService){
      if(localStorageService.get("angular-todolist")){
        $scope.todo = localStorageService.get("angular-todolist");
      }
      else{
        $scope.todo = [];
      }
      $scope.newAct = {};

      $scope.agregarAct = function(){
        $scope.todo.push($scope.newAct);
        console.log($scope.newAct);
        $scope.newAct = {};
      };
      $scope.limpiarLista = function(){
        $scope.todo = [];
      };

      $scope.$watchCollection("todo",function(){
        localStorageService.set("angular-todolist",$scope.todo);
      });
  });
