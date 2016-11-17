(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
	};

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function (id) {
			console.log(id);
		},
	
		start: function() {
			console.log( 'Стартовая' );
		}
	});

	new App.Router;
	Backbone.history.start();

})();