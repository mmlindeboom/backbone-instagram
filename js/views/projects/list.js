//Filename: views/projects/list.js

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/projects/list.html'
	], function($, _, Backbone, projectListTemplate){
		var ProjectListView = Backbone.View.extend({
			el: $('#container'),
			render: function(){
				var data = {};
				var compiledTemplate = _.template( projectListTemplate, data);
				this.$el.append(compiledTemplate);
			}
		});
		return ProjectListView;
	});