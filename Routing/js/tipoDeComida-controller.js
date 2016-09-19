app.controller("TipoDeComidaController", function($scope){
	$scope.nombre= "";
	$scope.precioo= "";
	// bandera para saber si hay que editar o agregar uno nuevo, false(uno nuevo) true (editar)
	$scope.flagNewTipo = true;
	$scope.flagEditOrNew = false; 

	$scope.pizzas = [{id:1, nombreItem:"Fugazza", precio: 36, tipoComida: {tipo: "Pizza"}},{id:2, nombreItem:"Jamon y queso", precio: 87, tipoComida: {tipo: "Pizza"}},{id:3, nombreItem:"Palmitos", precio: 13,tipoComida: {tipo: "Pizza"}}];
	$scope.tartas = [{id:1, nombreItem:"Acelga", precio: 34, tipoComida: {tipo: "Lomitos"}},{id:2, nombreItem:"Jamon y queso", precio: 45, tipoComida: {tipo: "Lomitos"}},{id:3, nombreItem:"Choclo", precio: 16, tipoComida: {tipo: "Lomitos"}}];
	$scope.lomitos = [{id:1, nombreItem:"Simple", precio: 12, tipoComida: {tipo: "Tartas"}},{id:2, nombreItem:"Pollo", precio: 65, tipoComida: {tipo: "Tartas"}},{id:3, nombreItem:"Cerdo", precio: 19, tipoComida: {tipo: "Tartas"}}];
	// $scope.misTipos = [$scope.pizzas,$scope.tartas,$scope.lomitos];
	$scope.recuperarDatos = function (item) {
		$scope.nombre = item.nombreItem;
		$scope.precioo = item.precio;
		$scope.flagEditOrNew= true;
	}
	$scope.eliminarLomitos = function (index) {
		$scope.lomitos.splice(index,1);
		console.log(index);
	}
	$scope.eliminarPizzas = function (index) {
		$scope.pizzas.splice(index,1);
		console.log(index);
	}
	$scope.eliminarTartas = function (index) {
		$scope.tartas.splice(index,1);
		console.log(index);
	}
	// $scope.agregarItem =function(item){
	// 	if () {}
	// }
	$scope.probar=function () {
		for (var i = $scope.tipos.length - 1; i >= 0; i--) {
			console.log($scope.tipos[i]);
			for (var j = $scope.tipos[i].length - 1; j >= 0; j--) {
				console.log($scope.tipos[j].nombreItem);
				console.log($scope.tipos[j].precio);
				// console.log($scope.tipos[i].tipoComida.tipo);
			}
		}
	}
	$scope.misTipos = [
						{name: "Empanadas" , items:[{nameItem: "Pollo", cost: 10},{nameItem: "CarneDulce", cost: 14},{nameItem: "Arabe", cost: 13}]},
						{name: "Pastas" , items:[{nameItem: "Fideos con tuco", cost: 50},{nameItem: "Ñoquis", cost: 46},{nameItem: "Canelones", cost: 34}]},
						{name: "Menúes" , items:[{nameItem: "Pollo a las brasas", cost: 10},{nameItem: "Carne con papas", cost: 45}]},
						{name: "Sandwiches" , items:[{nameItem: "Caprese", cost: 15},{nameItem: "Bondiolo", cost: 14},{nameItem: "Salamin", cost: 13}]}

	];
	// $scope.misComidas = [
	// 						{nombre: "Fugazza", precio: 4, tipoComida: {tipo: "Pizza"}},
	// 						{nombre: "Especial", precio: 4, tipoComida: {tipo: "Pizza"}},
	// 						{nombre: "Palmitos", precio: 4, tipoComida: {tipo: "Pizza"}},
	// 						{nombre: "Simple", precio: 4, tipoComida: {tipo: "Lomitos"}},
	// 						{nombre: "Completo", precio: 4, tipoComida: {tipo: "Lomitos"}},
	// 						{nombre: "Pollo", precio: 4, tipoComida: {tipo: "Lomitos"}},
	// 						{nombre: "Acelga", precio: 4, tipoComida: {tipo: "Tartas"}},
	// 						{nombre: "Choclo", precio: 4, tipoComida: {tipo: "Tartas"}},
	// 						{nombre: "JamonyQueso", precio: 4, tipoComida: {tipo: "Tartas"}},
	// 						{nombre: "Calabacin", precio: 4, tipoComida: {tipo: "Tartas"}},
	// 					];
	
	// function Tipo(nombre){
	// 	this.nombre = nombre;
	// }
	// function Item(nombre,precio,tipo){
	// 	this.nombre = nombre;
	// 	this.precio = precio;
	// 	this.tipo = tipo;
	// }
	// $scope.misTipos = [new Tipo("Pizzas"),new Tipo("Lomitos"),new Tipo("Tartas")];
	// $scope.misComidas = [new Item("Fugazza",35,Pizzas),
	// 					new Item("Especial",46,Pizzas),
	// 					new Item("Rucula",30,Pizzas),
	// 					new Item("Morron",37,Pizzas),
	// 					new Item("Completo",67,Lomitos),
	// 					new Item("Simple",68,Lomitos),
	// 					new Item("Cerdo",78,Lomitos),
	// 					new Item("Cebolla y Queso",34,Tartas),
	// 					new Item("Verduras",31,Tartas),
	// 					new Item("Atun",24,Tartas),
	// 					new Item("Choclo",27,Tartas),
	// 					];



});