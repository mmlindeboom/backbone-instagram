//Filename: views/users/list.js

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/users/list.html'
	], function($, _, Backbone, userListTemplate){
		var UserListView = Backbone.View.extend({
			el: $('#container'),
			render: function(){
				var data = {};
				var compiledTemplate = _.template( userListTemplate, data);
				this.$el.append(compiledTemplate);
			}
		});
		return UserListView;
	});