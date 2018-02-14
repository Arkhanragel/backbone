var AppRouter = Backbone.Router.extend({
	routes:{
		""                  : "index",
		"news"              : "news",          // #news
		"index"             : "index",          // #index
		"songs"             : "songs"         //#songs
	},
	index: function() { 
		// Create index view
		new BackboneComponents.views.IndexView();
	},
	news: function(){
		// Create news view
		new BackboneComponents.views.NewsView();
	},
	songs : function(){
	    new BackboneComponents.views.SongsView();
	}
});