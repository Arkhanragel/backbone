define([ 'modules/core/itxBus', 'backbone', 'modules/views/todoItemView',
        'modules/models/todoItemModel' ], function(ItxBus, Backbone,
        TodoItemView, TodoItem) {

    return Backbone.View.extend({
        ids : 2,
        tagName : "ul",
        id : "todoItems",
        initialize : function(options) {
            if (!(options && options.model)) {
                throw new Error("model TodoItemCollection not specified");
            }

            this.model.on("add", this.onAddTodoItem, this);
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
        onRemoveTodoItem : function(todoItem) {
            console.log(todoItem);
            this.model.remove(todoItem);
            this.$el.empty();
            this.render();
        },
        events : {
            "click #add" : "onClickAdd"
        },
        getIdValido : function() {

            this.ids = this.ids + 1;
            return this.ids;
        },

        onClickAdd : function() {
            var self = this;
            var $textBox = self.$("#newTodoItem");
            var todoItem;
            if ($textBox.val() != '') {
                todoItem = new TodoItem({
                    description : $textBox.val(),
                    id : this.getIdValido()
                });
                $textBox.val('');
            } else {
                todoItem = new TodoItem({
                    description : "TodoItem " + (self.model.length + 2),
                    id : this.getIdValido()
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
    // return TodoItemCollectionView;

});
