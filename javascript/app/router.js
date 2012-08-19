var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	initialize: function() {		
		this.mapView = new App.MapView({
			mapModule: new App.MapModule()
		});
	},


});