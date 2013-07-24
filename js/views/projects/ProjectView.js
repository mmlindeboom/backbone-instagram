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
			events : {
				'click #refreshVid': 'loadVidResults',
				'hover video' : 'playVid',
				'mouseleave video' : 'stopVid'
			},
			render: function(){
				var that = this;
				this.loadVidResults();
			},
			loadVidResults: function(){
				var that = this;
				this.isLoading = true;
				if (this.isLoading == true) {
					$(that.el).html('<h4 class="loading"><img src="img/small-loading.gif"></h4>');
				}
				console.log('Loading Video results');
				this.instagramCollection.fetch({
					success: function(videos) {
						console.log('This is the videos object ',  videos.models.length);
						$(that.el).html(_.template(videoTemplate, {videos: videos.models, _:_}));
					}
				});
			},
			playVid: function(e) {
				var target = e.target;
				$target = $(e.target);
				$(target).parent().find('.count').addClass('active');
				target.play();
			},
			stopVid: function(e) {
				var target = e.target;
				$(target).parent().find('.count').removeClass('active');
				target.pause();
			}
		});
		return VideoView;
	});