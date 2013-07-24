define([
	'jquery',
	'underscore',
	'backbone'
	], function($,_, Backbone){
		var Location = Backbone.Model.extend({
			defaults : {
				lat : 100,
				lng : 100,
				results: {}
			},
			url: function() {
				return 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.defaults.lat +','+ this.defaults.lng +'&sensor=false';
			},
			sync: function(method, model, options) {
				console.log('this is' + this.defaults.lat);
				var params = _.extend({
					type: 'GET',
					dataType: 'json',
					url: this.url(),
					processData: false
				}, options);
				return $.ajax(params);
			},
			parse : function(response, options) {
					return response;
			}
		});
		return Location;
	});