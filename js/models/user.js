//Filename: models/user

define([
	'underscore',
	'backbone'
	], function(_, Backbone){
		var InstagramBlock = Backbone.Model.extend({
			defaults: {
				name: 'undefined',
				imageUrl: 'undefined',
				width: '612',
				height: '612'
			}
		});
		return InstagramBlock;
	});