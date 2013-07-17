require.config({
	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone'
	}
});

require([
	'app',
	], function(App){
		App.initialize();
	});
