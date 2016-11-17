(function() {
	
	window.App = {
		Views: {},
		Models: {},
		Collecions: {},
		Router: {}
	};
	
	var vent = _.extend({}, Backbone.Events);
	
	//console.log(vent);
	App.Views.SpecialTask = Backbone.View.extend({
		initialize: function () {
			vent.on('specialTasks:show', this.show, this);
		},
		show:function (id) {
			console.log('Выведем задачу с id : ' + id);
		}
	});

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'start',
			'specialTasks/:id' : 'showSpecialTasks'
		},
		
		showSpecialTasks: function (id) {
			vent.trigger('specialTasks:show', id);
			//console.log(id);
		},
	
		start: function() {
			console.log( 'Стартовая' );
		}
	});
	
	new App.Views.SpecialTask;
	
	new App.Router;
	Backbone.history.start();

})();