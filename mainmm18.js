(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
};

//шаблончик

window.template = function(id) {
	return _.template( $('#' + id).html() );
};

App.Router = Backbone.Router.extend({
	routes: {
		''					: 'index',
		'page/:id/*simbo'	: 'page'
	},
	
	index: function() {
		console.log('Running');
	},
	
	page: function(id, simbo) {
		//console.log('Royt = ' + id + ' id');
		console.log(simbo);
	}
});

new App.Router();
Backbone.history.start();

})();