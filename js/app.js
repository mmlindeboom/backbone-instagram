//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone){
		var initialize = function() {
			Router.initialize();
		}
		return {
			initialize: initialize
		};
	});