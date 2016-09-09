var express = require('express');
var router = express.Router();

router.route('/')

	.get(function(req,res){
		//Solucion temporal
		res.send({mensaje: "TODO: Mostrar todos los pedidos"});
	})

	.post(function(req,res){
		//Solucion temporal
		res.send({mensaje: "TODO: Crear un nuevo pedido"});
	});

//Con esto puedo trabajar con un pedido especifico, pasando parametros
//Este parametro puede ser cualquier cosa
router.route('/:id')
	
	//Devuelve un pedido particular
	.get(function(req,res){
		res.send({mensaje: "TODO: Mostrar pedido con id " + req.params.id});
	})

	//Modifica un determinado pedido
	.put(function(req,res){
		res.send({mensaje: "TODO: Actualizar el pedido con id " + req.params.id});
	})

	//Eliminamos un post en particular
	.delete(function(req,res){
		res.send({mensaje: "TODO: Elminar el pedido con id " + req.params.id});
	});
module.exports = router;