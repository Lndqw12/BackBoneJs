(function() {
	
	window.App = {
		Views: {}
		Models: {},
		Collecions: {}
};
//шаблончик
window.template = function(id) {
	return _.template( $('#' + id).hrml() );
};

}) ();