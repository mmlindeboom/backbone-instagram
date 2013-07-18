//Filename: views/projects/ProjectView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/projects/ProjectTemplate.html'
	], function($, _, Backbone, projectTemplate){
		var ProjectView = Backbone.View.extend({
			el: $('.content'),
			render: function(){
				var data = {};
				//var compiledTemplate = _.template( projectListTemplate, data);
				this.$el.html('<h1>Projects View</h1>');
			}
		});
		return ProjectView;
	});