var app = angular.module("Cazimba",["ngRoute"]);
app.controller("CazimbaController",function($scope){
	$scope.onload = function(){
		$(document).ready(function(){
		    $('.collapsible').collapsible({
		      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		    });
		  });
	};
});
