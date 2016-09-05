app.config(function($routeProvider)
{
	$routeProvider
		.when("/",
		{
			templateUrl: "partials/pedidos-pendientes.html"
		})
		.when("/pedidos",
		{
			templateUrl: "partials/pedidos.html",
			controller : "PedidosController"
		})
		.when("/pedidos-pendientes",
		{
			templateUrl: "partials/pedidos-pendientes.html"
		})
		.when("/tipoComidas",
		{
			templateUrl: "partials/tipoComida.html"
		})
		.otherwise(
		{
			templateUrl: "partials/error.html"
		})
})