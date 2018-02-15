var BackboneComponents = {
	models : [],
	collections : [],
	views : []
};

$(function() {
	// Load components
    //Modelos
    BackboneComponents.models["Song"] = Song;
    
    //Vitas
	BackboneComponents.views["IndexView"] = IndexView;
	BackboneComponents.views["NewsView"] = NewsView;
	BackboneComponents.views["SongsView"] = SongsView;
	BackboneComponents.views["SongView"] = SongView;
	
	//Colecciones
	BackboneComponents.collections["Songs"] = Songs;
	
	// Create router
	var router = new AppRouter();
	
	
	
	
	// Start app
	Backbone.history.start();	
  });