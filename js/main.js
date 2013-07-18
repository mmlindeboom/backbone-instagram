require.config({
	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		templates: '../templates'
	}
});

require([
	'app',
	], function(App){
		App.initialize();
		console.log('App Initialized');
	});
