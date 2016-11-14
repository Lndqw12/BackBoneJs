$(function) {
	window.App = {
			Models: {},
			Collections: {},
			Views: {}
	};
	
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};
	
	App.Models.Task = Backbone.Model.extend({});
	App.Views.Tsk = Backbone.View.exetend({
		tagName: 'li',
		render: function () {
			this.$el.html( this.model.get('title') );
			return this;
	}
});

var Task = new App.Models.Task({
	title: '—ходить в магаз',
	priority: 4
});
var taskView = new App.Views.Task({ model: task});

console.log (taskView.render().el);

});