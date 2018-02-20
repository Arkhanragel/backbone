define([ 'backbone' ], function(Backbone) {

    return Backbone.Model.extend({

        idAttribute : "id",
        urlRoot : "/api/item",
        defaults : {
            id : '',
            descripccion: ''
        },
        validate : function(attrs) {
            if ( attr.description && attr.description != '' ) {
                return "Se requiere descripccion";
            }
            if (!attr.id  && attr.id != '') {
                return "Se requiere id";
            }
        }
    });
    

});
