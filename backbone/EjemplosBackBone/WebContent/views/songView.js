$(function() {
    SongsView = Backbone.View.extend({
        el: $("#content"),
       
        i18n : {
            'backHome' : 'Volver a Inicio'
        },
        
        initialize: function(){
         // Load template
            this.template = $("#songsViewTemplate").html();
            
            // Compile template
            this.html = _.template(this.template);
            
            // Build template
            this.model = new Song({title: "Primera cancion"});
            this.html = this.html({
                titulo: this.model.get('title'), 
                genero: this.model.get('genre'),
                i18n : this.i18n});
            
            
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

          
            this.render(); // not all views are self-rendering. This one is.
        },
        
        render: function(){
            this.$el.empty();
            this.$el.append(this.html);
           
        }
    });
});