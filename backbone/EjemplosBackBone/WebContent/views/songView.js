$(function() {
    SongView = Backbone.View.extend({
        el : $("#content"),
       
        i18n : {
            'backHome' : 'Volver a Inicio'
        },
        tagName: "li",
        
        initialize : function() {
            // Load template
            this.template = $("#songViewTemplate").html();

            // Compile template
            this.html = _.template(this.template);

            // Build template
            this.html = this.html({
                titulo : this.model.get('title'),
                genero : this.model.get('genre'),
                artista : this.model.get('artist'),
                escuchando : this.model.get('listeners'),
                reproducciones : this.model.get('reprods'),
                i18n : this.i18n
            });

            _.bindAll(this, 'render'); // fixes loss of context for 'this'
                                        // within methods
            
            //Evento ante modificaciones de atributos para que vuelva a renderizar
            this.model.on("change", this.render, this);

            // this.render(); // not all views are self-rendering. This one is.
        },
        
        events: {
            "click" : "onClick",
            "click .bookmark" : "onClickBookmark"
        },
        onClick : function(){
            console.log(this.model.get('title') +  " sonando");
        },
        onClickBookmark :function(e){
            e.stopPropagation();
            console.log(this.model.get('title') +  " añadido a favoritos");
        },
        
        render : function() {
            // this.$el.empty();
            this.$el.attr("id", this.model.id);
            this.$el.append(this.html + "<button> Escuchar </button>  <button class='bookmark'> Favorito</button>");
            return this;
        }
    });
});