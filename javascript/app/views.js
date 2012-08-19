var App = App || {};

App.MapView = Backbone.View.extend({
	el: "div#map",

	initialize: function(options){
		this.mapModule = this.options.mapModule;
		this.mapModule.createMap(this.el, { coords: [37.8, -96], zoom: 4 });
	},
});