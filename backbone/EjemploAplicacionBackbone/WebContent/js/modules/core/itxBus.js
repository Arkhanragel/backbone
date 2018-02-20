define(
        [ 'backbone' ],
        function() {
            var instance = null;
            function BackboneInditexEventBus() {
                if (instance !== null) {
                    throw new Error(
                            "Cannot instantiate more than one BackboneInditexEventBus, use BackboneInditexEventBus.getInstance()");
                }

                this.initialize();
            }

            BackboneInditexEventBus.prototype = {
                initialize : function() {
                    // summary:
                    // Initializes the error handler.
                    _.extend(this, Backbone.Events);
                }
            };
            BackboneInditexEventBus.getInstance = function() {
                // summary:
                // Gets an instance of the singleton. It is better to use
                if (instance === null) {
                    instance = new BackboneInditexEventBus();
                }
                return instance;
            };
            return BackboneInditexEventBus.getInstance();
        });