
define(['modules/core/itxBus', 'backbone'], function(ItxBus,Backbone){
    return Backbone.View.extend({
        tagName : "li",
        initialize : function(options) {
            if (!(options && options.model)) {
                throw new Error("model TodoItem not specified");
            }
        },
        events : {
            "click #remove" : "onClickRemove"
        },
        render : function() {
            this.$el.html(this.model.get("description"));
            this.$el.append("<button id='remove' data-id="
                    + this.model.get('id') + ">Eliminar</button>")
            return this;
        },
        onClickRemove : function(e){
            e.preventDefault(); // Good practice for button clicks
            if(this.model){
                ItxBus.trigger('seleccionarItem:eliminarItem', this.model);
            }
        }
    });
    
    // return TodoItemView;
    
});

