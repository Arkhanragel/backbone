
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

require.config({
  
  paths : {
    // Project paths
    lib : 'js/lib',
    backbone:  'lib/backbone-min' ,
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min'
        
        
  }
});

define([ 'modules/models/todoItemModel', 'modules/views/todoItemView',
        'modules/collections/todoItemCollection',
        'modules/views/todoItemCollectionView' ], function(TodoItem,
        TodoItemView, TodoItemCollection, TodoItemCollectionView) {
$(document).ready(function(){
   var todoItem =  new TodoItem({description: "TodoItem 1"}); 
   var todoItemView = new TodoItemView({ model: todoItem});
   $("body").append(todoItemView.render().$el);
   
   var todoItemCollecton = new TodoItemCollection([new TodoItem({description: "TodoItem 2", identificador:1, id:0}), new TodoItem({description: "TodoItem 3", identificador:2, id:1}) ]);
   var todoItemCollectionView =  new TodoItemCollectionView({model: todoItemCollecton});
   $("body").append(todoItemCollectionView.render().$el);
   
});
});