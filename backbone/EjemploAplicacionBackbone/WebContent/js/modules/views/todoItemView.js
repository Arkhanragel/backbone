
define(['modules/core/itxBus', 'backbone'], function(ItxBus,Backbone){
    var TodoItemView = Backbone.View.extend({
        tagName : "li",
        initialize : function(options) {
            if (!(options && options.model)) {
                throw new Error("model TodoItem not specified");
            }
            this.on('remove', this.lanzaEvento);
        },
        events : {
            "click #remove" : "onClickRemove"
        },
        render : function() {
            this.$el.html(this.model.get("description"));
            this.$el.append("<button id='remove' data-id="
                    + this.model.get('identificador') + ">Eliminar</button>")
            return this;
        },
        onClickRemove : function(e){
            e.preventDefault(); //Good practice for button clicks
            if(this.model){
                this.remove();
            }
        },
        
        lanzaEvento: function(){
            ItxBus.trigger('seleccionarItem:eliminarItem');
        }
    });
    
    return TodoItemView;
    
});

