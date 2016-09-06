angular.module("Empleados",[])
	.controller("empleados-controller",function($scope){
		$scope.newEmpleado = {};
		$scope.empleados = 
		[
			{
				nombre: "Nico Rios",
				fechaNac: "12/09/1994",
				user: "nicorios",
				rol: "Administrador",
				domicilio: "San Jeronimo 2486",
				celular: 3513701199,
				email: "niicorios@gmail.com"
			},
			{
				nombre: "Facu Rossi",
				fechaNac: "16/09/1994",
				user: "facurossi",
				rol: "Empleado",
				domicilio: "Independencia 150",
				celular: 3513117099,
				email: "facurossi@gmail.com"
			},
			{
				nombre: "Agus Grigorius",
				fechaNac: "10/10/1994",
				user: "agusgrigorius",
				rol: "Empleado",
				domicilio: "Muy lejos",
				celular: 3515665767,
				email: "agusgrigorius@gmail.com"
			},
		];
	})