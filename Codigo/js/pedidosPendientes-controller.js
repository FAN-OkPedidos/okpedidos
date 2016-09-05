angular.module("pedidosPendientes", [])
.controller('pedidosPendientesController', function($scope) {
  $scope.pedidos = [
  	{numero: 1, items :[{pedido: "Pollo al Horno con doradas",cantidad:2 }]},
  	{numero: 2, items :[{pedido: "Tarta de Pollo",cantidad:1}]},
  	{numero: 3, items :[{pedido: "Lomo Completo",cantidad:3}]},
  	{numero: 4, items :[{pedido: "Muzza" , cantidad:2}]},
  	{numero: 5, items :[{pedido: "Lomo Simple",cantidad:1}]},
  	{numero: 6, items :[{pedido: "Empanadas de Atun",cantidad:2}]}
  ];
});