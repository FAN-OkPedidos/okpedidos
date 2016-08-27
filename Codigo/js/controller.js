angular.module("Cazimba",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/pedidos",{
			templateUrl : "pedidos-routing.html"
		});
	});