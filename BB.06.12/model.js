var app = app || {};

$(function () {

    app.MyObject = Backbone.Model.extend({

    });

    app.myObect = new app.MyObject({
        name: "rocket",
        description: "super",
        class: "grenade"
    });

    var json  = app.myObect.toJSON();
    console.log(json);

});