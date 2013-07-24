define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_, Backbone){
		var Location = Backbone.Model.extend({
			url: function() {
				console.log(lat)
				return 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat +','+ lng +'&sensor=false';
			},
			sync: function(method, model, options) {
				var params = _.extend({
					type: 'GET',
					dataType: 'json',
					url: this.url(),
					processData: false
				}, options);
				return $.ajax(params);
			},
			parse : function(response, options) {
					return response.results;
			}
		});
		return Location;
	});