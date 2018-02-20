define([ 'modules/core/itxBus', 'backbone', 'modules/views/todoItemView',
        'modules/models/todoItemModel' ], function(ItxBus, Backbone,
        TodoItemView, TodoItem) {

    var TodoItemCollectionView = Backbone.View.extend({

        tagName : "ul",
        id : "todoItems",
        initialize : function(options) {
            if (!(options && options.model)) {
                throw new Error("model TodoItemCollection not specified");
            }

            this.model.on("add", this.onAddTodoItem, this);
            // this.model.on("remove", this.onRemoveTodoItem, this);
            this.listenTo(ItxBus, 'seleccionarItem:eliminarItem',
                    this.onRemoveTodoItem);
        },
        onAddTodoItem : function(todoItem) {
            console.log(todoItem.toJSON());
            console.log(todoItem);
            var view = new TodoItemView({
                model : todoItem
            });
            this.$el.append(view.render().$el);
        },
        onRemoveTodoItem : function() {
            this.$el.empty();
            this.render();
        },
        events : {
            "click #add" : "onClickAdd"
        },

        // onClickRemove : function(e){
        // e.preventDefault(); //Good practice for button clicks
        // var id = $(e.currentTarget).data('id');
        // this.model.remove(id);
        // },

        onClickAdd : function(e) {
            var self = this;
            var $textBox = self.$("#newTodoItem");
            if ($textBox.val() != '') {
                var todoItem = new TodoItem({
                    description : $textBox.val(),
                    identificador : self.model.length + 1,
                    id : self.model.length
                });
                $textBox.val('');
            } else {
                var todoItem = new TodoItem({
                    description : "TodoItem " + (self.model.length + 2),
                    identificador : self.model.length + 1,
                    id : self.model.length
                });
            }

            self.model.add(todoItem);

        },

        render : function() {
            var self = this;

            self.$el.append("<input type='text' id='newTodoItem'> </input>")
            self.$el.append("<button id='add'>Añadir</button>")
            this.model.each(function(todoItem) {
                var viewTodoItem = new TodoItemView({
                    model : todoItem
                });
                self.$el.append(viewTodoItem.render().$el);
            });

            return this;
        }
    });
    return TodoItemCollectionView;

});
