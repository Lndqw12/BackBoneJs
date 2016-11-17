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
		'page/:id/sdgsdgs'	: 'page'
	},
	
	index: function() {
		console.log('Running');
	},
	
	page: function() {
		console.log('Royt cool - ' + id + '!!!');
	}
});

new App.Router();
Backbone.history.start();

})();