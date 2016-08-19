var app=angular.module("PrimerApp",[]);
app.controller("PrimerController",function($scope){
    $scope.nombre = "Nico";
    $scope.nuevoUsuario = {};
    $scope.usuarios = [];
    $scope.agregarUsuario = function(){
        $scope.usuarios.push($scope.nuevoUsuario);
        $scope.nuevoUsuario = {};
    }
});
