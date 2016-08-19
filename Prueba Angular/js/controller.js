var app=angular.module("PrimerApp",[]);
app.controller("PrimerController",["$scope",function(s){
    s.nuevoUsuario = {};
    s.usuarios = [];
    s.agregarUsuario = function(){
        s.usuarios.push(s.nuevoUsuario);
        s.nuevoUsuario = {};
    }
}]);
