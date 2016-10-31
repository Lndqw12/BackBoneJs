var Person = Backbone.Model.extend({// мясо жареное это класс
   defaults: {
       name: 'Pomidor',
       age: '77',
       job: 'Kaskader'
   },
    walk:function(){
        return this.get('name')+ ' is walking';
    }
});
//var person = new Person;