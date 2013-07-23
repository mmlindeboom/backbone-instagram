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
				var that = this;
				this.loadResults()				
				//var compiledTemplate = _.template(userTemplate, data);
				//this.$el.html(compiledTemplate);
			},
			loadResults: function(){
				var that = this;
				this.isLoading = true;
				if (this.isLoading == true) {
					$(that.el).append('<h4 class="loading">Loading</h4>')
				}
				this.instagramCollection.fetch({
					update: true,
					success: function(photos) {
						console.log(photos.models)
						$(that.el).html(_.template(userTemplate, {photos: photos.models, _:_}))
					}
				});
			}
		});
		return UserView;
	});