//Filename: views/home/HomeView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/users/userTemplate.html'
	], function($, _, Backbone, userTemplate){
		var UserListView = Backbone.View.extend({
			el: $('.content'),
			render: function(){
				var data = {'title': 'Hello'};
				//var compiledTemplate = _.template( userTemplate, data);
				this.$el.html('<h1>Users</h1>');
				console.log('hola');
			}
		});
		return UserListView;
	});