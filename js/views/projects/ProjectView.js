//Filename: views/users/UserView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/instagram',
	'text!templates/projects/projectTemplate.html'
	], function($, _, Backbone, InstagramCollection, videoTemplate){
		var  VideoView = Backbone.View.extend({
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
					success: function(videos) {
						console.log(videos.models);
						$(that.el).html(_.template(videoTemplate, {photos: videos.models, _:_}));
					}
				});
			}
		});
		return VideoView;
	});