$(function() {
	IndexView = Backbone.View.extend({
		el: $("#content"), // attaches `this.el` to an existing element.
		template : '',
		html : '',
		i18n : {
			'seeNews' : 'Ver Novedades',
			'seeSong': 'Ver cancion',
			'seeSongs': 'Ver canciones',
		},
		/* 
		 *  initialize(): Automatically called upon instantiation. Where you make all types of
		 * 	   bindings, excluding UI events, such as clicks, etc.
		*/
		initialize: function(){
			// Load template
			this.template = $("#indexViewTemplate").html();
			
			// Compile template
			this.html = _.template(this.template);
			
			// Build template
			this.html = this.html({name:'world', i18n : this.i18n});
			
			_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

			this.render(); // not all views are self-rendering. This one is.
		},
		
		/* 
		 *  render(): Function in charge of rendering the entire view in this.el. 
		 * 	   Needs to be manually called by the user.
		*/
		
		render: function(){
			$(this.el).empty();
			$(this.el).append(this.html);
		}
	  });
});