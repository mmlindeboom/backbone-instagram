//Filename: views/users/UserView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/instagram',
	'text!templates/users/userTemplate.html'
	], function($, _, Backbone, PhotosCollection, userTemplate){
		var UserView = Backbone.View.extend({
			el: $('.content'),
			initialize: function() {
				this.isLoading = false;
				this.photosCollection = new PhotosCollection();
			},
			events : {
				'click #refresh': 'loadResults',
				'hover li img' : 'showModel',
				'mouseleave li img': 'hideModel'
			},
			render: function(){
				var that = this;
				this.loadResults();
			},
			loadResults: function(){
				var that = this;
				this.isLoading = true;
				if (this.isLoading == true) {
					$(that.el).html('<h4 class="loading"><img src="img/small-loading.gif"></h4>')
				}
				this.photosCollection.fetch({
					update: true,
					success: function(photos) {

						console.log('This is the photos model ', photos.models)
						$(that.el).html(_.template(userTemplate, {photos: photos.models, _:_}))
					}
				});
			},
			showModel : function(e) {
				$target = $(e.target);
				console.log($target);
				$target.parent().find('.count').addClass('active');
				
			},
			hideModel : function(e) {
				$target = $(e.target);
				$target.parent().find('.count').removeClass('active');
			}
		});
		return UserView;
	});