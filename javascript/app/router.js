var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	initialize: function() {		
		this.mapView = new App.AppSpecificMapView({
			mapModule: new App.MapModule(),
			el: "div#map",
			defaultView: { coords: [37.8, -96], zoom: 4 }
		});
	},


});