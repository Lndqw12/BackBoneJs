(function() {
	
	window.App = {
		Views: {}
		Models: {},
		Collecions: {}
};
//���������
window.template = function(id) {
	return _.template( $('#' + id).hrml() );
};

}) ();