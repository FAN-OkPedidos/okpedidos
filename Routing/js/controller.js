var app = angular.module("Cazimba",["ngRoute"]);
app.controller("PedidosController",function($scope){
	$scope.pedido = [];
	$scope.delivery;
	$scope.actualizarTotal = function(){
		$scope.total = $scope.subtotal + $scope.delivery;
	};
	$scope.agregarItem = function(item){
		$scope.pedido.push(item);
		$scope.subtotal = $scope.pedido.reduce(function(total,actual){
			return total + parseFloat(actual.precio);
		},0);
		$scope.total = $scope.subtotal + $scope.delivery;
	};
	$scope.eliminarItem = function(index){
		$scope.pedido.splice(index,1);
		$scope.subtotal = $scope.pedido.reduce(function(total,actual){
			return total + parseFloat(actual.precio);
		},0);
		$scope.total = $scope.subtotal + $scope.delivery;
	};
	$scope.pizzas = 
	[
		{
			nombre: "Fugazetta",
			precio: "0.87"
		},
		{
			nombre: "Calabresa",
			precio: "0.94"
		},
		{
			nombre: "Napolitana",
			precio: "0.91"
		},
		{
			nombre: "Palmitos",
			precio: "0.80"
		}
	];
	$scope.tartas = 
	[
		{
			nombre: "Choclo",
			precio: "0.87"
		},
		{
			nombre: "Acelga",
			precio: "0.94"
		}
	];
	$scope.empanadas = 
	[
		{
			nombre: "Árabes",
			precio: "0.87"
		},
		{
			nombre: "Jamón y Queso",
			precio: "0.94"
		},
		{
			nombre: "Carne Picada",
			precio: "0.91"
		},
		{
			nombre: "Verduras",
			precio: "0.80"
		},
		{
			nombre: "Pollo",
			precio: "0.94"
		},
		{
			nombre: "Matambre",
			precio: "0.91"
		}
	];
});
