//Filename: views/users/UserView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/instagram',
	'text!templates/users/userTemplate.html'
	], function($, _, Backbone, InstagramCollection, userTemplate){
		var UserView = Backbone.View.extend({
			el: $('.content'),
			initialize: function() {
				this.isLoading = false;
				this.instagramCollection = new InstagramCollection();
			},
			render: function(){
				this.loadResults();
				//var compiledTemplate = _.template(userTemplate, data);
				//this.$el.html(compiledTemplate);
			},
			loadResults: function(){
				var that = this;
				this.isLoading = true;
				this.instagramCollection.fetch({
					success: function(photos) {
						console.log(photos);
						$(that.el).append(_.template(userTemplate, {photos: photos.models}))
					}
				});
			}
		});
		return UserView;
	});