define([ 'backbone' ], function(Backbone) {

    var TodoItem = Backbone.Model.extend({

        idAttribute : "id",
        defaults : {
            id : ''
        },
        validate : function(attrs) {
            if (!attr.description) {
                return "Se requiere descripccion";
            }
            if (!attr.id) {
                return "Se requiere id";
            }
        }
    });
    return TodoItem;

});