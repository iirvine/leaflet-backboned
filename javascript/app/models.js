var App = App || {};

App.MapModule = function () {
	this.map;

	var createMap = function(element, defaultView) {
		this.map = L.map(element)
					.setView(defaultView.coords, defaultView.zoom);

		this.addBaseLayer();
		return this.map;
	};

	var addBaseLayer = function() {
		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', 
		{
			key: "721f5fe14d2a4ae5bf8ecb6412263ce2",
			styleId: 22677
		}).addTo(this.map);
	};

	var addLayer = function(layer) {

	};

	return {
		createMap: createMap,
		addLayer: addLayer,
		addBaseLayer: addBaseLayer
	}
};