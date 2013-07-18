//Filename: views/users/UserView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/users/userTemplate.html'
	], function($, _, Backbone, userTemplate){
		var UserListView = Backbone.View.extend({
			el: $('.content'),
			render: function(){
				var data = {username :'Mary'};
				var compiledTemplate = _.template(userTemplate, data);
				this.$el.html(compiledTemplate);
			}
		});
		return UserListView;
	});