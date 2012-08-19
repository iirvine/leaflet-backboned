var App = App || {};

App.MapView = Backbone.View.extend({
	el: "div#map",

	initialize: function(options){
		if (options.el)
			this.setElement(options.el);

		this.mapModule = options.mapModule;
		App.vent.trigger('map:createMap', this.el, options.defaultView);
	},
});

App.AppSpecificMapView = App.MapView.extend({
	initialize: function(options) {
		//call superclass constructor...
		App.MapView.prototype.initialize.call(this, options);
		
		//subclass specific stuff here....
	},
});