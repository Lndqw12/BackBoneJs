var app = app || {};

$(function () {

    app.MyObject = Backbone.Model.extend({
        defaults: {
            name: "name",
            description: "-",
            size: 100
        },
        initialize: function() {
            console.log('obj create');
            this.on('change', function (){
                console.log('obj change');
                var json  = app.myObect.toJSON();
                console.log(json);
            });
        }
    });

    app.myObect = new app.MyObject({
        name: "rocket",
        description: "super",
        class: "grenade"
    });

    app.myObect.set({
        type: "active",
        size: 250
    });

    //console.log ("size: "+app.MyObject.get('size'));

    var json  = app.myObect.toJSON();
    //console.log(json);
    //console.log ('size:', 'size:');

});