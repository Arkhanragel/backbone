define(
        [ 'backbone', 'modules/models/todoItemModel' ],
        function(Backbone, TodoItem) {

var TodoItemCollection = Backbone.Collection.extend({
    model : TodoItem
});
return TodoItemCollection;
        });