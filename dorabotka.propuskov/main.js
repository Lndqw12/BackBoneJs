﻿//helper шаблона
var template=function(id){
return _.template( $('#'+id).html());
};
//Модель человека
var Person = Backbone.Model.extend({
	defaults:{
		name: 'Ной',
		age:40,
		job:'Монолит'
	}
});
var person= new Person();
 // Список пиплов
 var PeopleCollection = Backbone.Collection.extend({
	 model:Person
 });
 //Вид списка человвек
var PeopleView=Backbone.View.extend({
	 tagName:'ul',
	 
	 initialize:function(){
	 },
	 render:function(){
		 this.collection.each(function(person){
			 var personView = new PersonView({model:person});
			 
			 this.$el.append(personView.render().el);
		 }, this);
		 return this;
	 }
 });
 // Вид одного мена
var PersonView=Backbone.View.extend({
	 tagName:'li',
	 
 template: template('testTemplate'),
	 
	 initialize:function(){
		 this.render();
	 },
	 render:function(){
		 //норм шаблон
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	 }
 });
  // Вид одного пипла 2
var TestView=Backbone.View.extend({
	 tagName:'li',
	 
 template: template('testTemplate'),
	 
	 initialize:function(){
		 this.render();
	 },
	 render:function(){
		 //норм шаблон 2
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	 }
 });
 		var peopleCollection = new PeopleCollection([
		{
			name: 'Данил',
			age: 35,
			job: 'Механик'
		},
		{
			name: 'Наташа',
			age: 17,
			job: 'студентка'
		},
		{
			name: 'Коля',
			age:  60,
			job: 'пенсионер'
		}
		]);
		var peopleView = new PeopleViews({collection:peopleCollection});
		 $(document.body).append(peopleView.render().el); 