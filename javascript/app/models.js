var App = App || {};

App.MapModule = (function () {
	this.map;

	var createMap = function(element, defaultView) {
		this.map = L.map(element)
					.setView(defaultView.coords, defaultView.zoom);

		this.addBaseLayer();
		return this.map;
	};

	var addBaseLayer = function() {
		this.addLayer(
			L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', 
			{
				key: "721f5fe14d2a4ae5bf8ecb6412263ce2",
				styleId: 22677
			}));
	};

	var addLayer = function(layer) {
		layer.addTo(this.map);
	};

	return {
		createMap: createMap,
		addLayer: addLayer,
		addBaseLayer: addBaseLayer
	}
})();