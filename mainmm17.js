(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
};
//шаблончик
window.template = function(id) {
	return _.template( $('#' + id).hrml() );
};

App.Router = Backbone.Router.extend({
	reuters: {
		'' : 'index'
	},
	
	index: function() {
		console.log('Running');
	}
});

new App.Router();


})();