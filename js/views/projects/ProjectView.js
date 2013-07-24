//Filename: views/users/UserView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/instagram',
	'models/location',
	'text!templates/projects/projectTemplate.html'
	], function($, _, Backbone, InstagramCollection, Locations, videoTemplate){
		var  VideoView = Backbone.View.extend({
			el: $('.content'),
			initialize: function() {
				this.isLoading = false;
				this.instagramCollection = new InstagramCollection();
				this.locations = new Locations();
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
				that = this;
				this.instagramCollection.fetch({
					success: function(videos) {
						console.log('This is the videos object ',  videos.models);
						self = self || {};
						var location = [];
						var countries = [];
						self.display = function(arr) {
							countries.location = arr;
							return countries
						}
						for (var i = 0; i<videos.models.length; i++) {
							var count = i
							location.push({attributes: videos.models[i]['attributes'].location})
							if (location[i].attributes != null ) {
								lat = location[i].attributes.latitude;
								lng = location[i].attributes.longitude;
								that.locations.set({lat:lat, lng:lng, results: that.locations.parse()});
								if (that.locations.lat != 'undefined'){
									that.locations.fetch({
										success : function(loc) {
											console.log(loc);
										}
									});
								}
								
								//that.locations.set({lat:lat, lng:lng})
								// $.ajax({
								// 	url: '',
								// 	method: 'GET',
								// 	dataType: 'JSON',
								// 	success: function(data) {
								// 		for (var j = 0; j < data.results.length; j++) {
								// 			var address = data.results[j].address_components;
								// 			for (var k = 0; k < address.length; k++) {
								// 					var boundry = address[k]['types'][0];
								// 					var country = address[k]['long_name'];
								// 					if (boundry === 'country') {
								// 						countries.push({location:country})
								// 					}
								// 			}
								// 		}
								// 	}
								// })
							}
						} 
						if (countries.length != 0) {
							console.log(countries);
						}
						$(that.el).html(_.template(videoTemplate, {videos: videos.models, _:_ , country: 'hullo'}));
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