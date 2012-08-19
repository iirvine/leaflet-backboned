var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	initialize: function() {		
		App.vent.on('map:createMap', App.MapModule.createMap, App.MapModule);
		this.mapView = new App.AppSpecificMapView({
			mapModule: App.MapModule,
			defaultView: { coords: [37.8, -96], zoom: 4 }
		});
	},


});