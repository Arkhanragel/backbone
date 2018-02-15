var AppRouter = Backbone.Router.extend({
    routes : {
        "" : "index",
        "news" : "news", // #news
        "index" : "index", // #index
        "song" : "song", // #song
        "songs" : "songs" // #songs
    },
    index : function() {
        // Create index view
        new BackboneComponents.views.IndexView();
    },
    news : function() {
        // Create news view
        new BackboneComponents.views.NewsView();
    },
    song : function() {
        new BackboneComponents.views.SongView();
    },
    songs : function() {
        new BackboneComponents.views.SongsView();
    }
});