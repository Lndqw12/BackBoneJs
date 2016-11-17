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
	routers: {
		''	     : 'index',
		'page/5' : 'page'
	},
	
	index: function() {
		console.log('Running');
	},
	
	apge: function() {
		console.log('Royt');
	}
});

new App.Router();
Backbone.history.start();

})();