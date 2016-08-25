var app = angular.module("PrimerApp" , []);
app.controller("TipoDeComidaController", function($scope){
	$scope.items = {};
	// $scope.tipoDeComida = [
	// 	{
	// 		nombre : "Pizzas",
	// 		items : [{id:1, nombreItem:"Fugazza"},{id:2, nombreItem:"Jamon y queso"},{id:3, nombreItem:"Palmitos"}]
	// 	},
	// 	{
	// 		nombre : "Lomitos",
	// 		items : [{id:1, nombreItem:"Simple"},{id:2, nombreItem:"Pollo"},{id:3, nombreItem:"Cerdo"}]
	// 	},
	// 	{
	// 		nombre : "Tartas",
	// 		items : [{id:1, nombreItem:"Acelga"},{id:2, nombreItem:"Jamon y queso"},{id:3, nombreItem:"Choclo"}]
	// 	}

	// ];
	$scope.pizzas = [{id:1, nombreItem:"Fugazza", precio: 35},{id:2, nombreItem:"Jamon y queso", precio: 35},{id:3, nombreItem:"Palmitos", precio: 35}];
	$scope.tartas = [{id:1, nombreItem:"Acelga", precio: 35},{id:2, nombreItem:"Jamon y queso", precio: 35},{id:3, nombreItem:"Choclo", precio: 35}];
	$scope.lomitos = [{id:1, nombreItem:"Simple", precio: 35},{id:2, nombreItem:"Pollo", precio: 35},{id:3, nombreItem:"Cerdo", precio: 35}];


});