//Filename: boilerplate.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/projects/ProjectView',
	'views/users/UserView'
	], function($, _, Backbone, ProjectView, UserView){
		//console.log(ProjectView, UserView);
		var Router = Backbone.Router.extend({
			routes: {
				//Define routes
				'projects': 'showProjects',
				'users': 'showUsers',

				//Default 
				'*actions': 'defaultAction'
			}
		});
		var initialize = function(){
			var app_router = new Router;
			app_router.on('route:showProjects', function(){
				var projectView = new ProjectView();
				projectView.render();
			});
			app_router.on('route:showUsers', function(){
				var userView = new UserView();
				userView.render();
				console.log('Users Rendered')
			});
			app_router.on('route:defaultAction', function(actions){
				console.log('No route:', actions);
			});
			Backbone.history.start();
		};
		return {
			initialize:initialize
		};
});