define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone){
		var Instagram = Backbone.Collection.extend({

			url: function () {
				return 'https://api.instagram.com/v1/media/popular?client_id=' + this.client_id;
			},
			sync: function(method, model, options) {
				var params = _.extend({
					type: 'GET',
					dataType: 'jsonp',
					url: this.url(),
					processData: false
				}, options);
				return $.ajax(params)
			},
			parse: function(resp, xhr) {
					console.log('The xhr is', xhr);
					return resp.data;
			},
			client_id: '8fb211e761414d1eafe6eac2b917efd6'
	});
	return Instagram;
});