((exports, L, B, $) -> 

	class exports.MapView extends B.View
		el: "#map"

		initialize: (options) ->
			if (options.el)
				@setElement(options.el)

			if (options.defaultView)
				@defaultView = options.defaultView

			@mapModel = options.mapModel
			@createMap().addControl(new L.Control.Locate())

		createMap: (options) ->
			@map = L.map(@el).setView(@defaultView.coords, @defaultView.zoom)
			@map.on 'load', app.trigger 'map:ready'
			@addLayer(@mapModel.get 'baseLayer')
			return @map

		addLayer: (layer) ->
			@map.addLayer(layer)

	class exports.MapModel extends B.Model
		layers: []

		defaults:
			baseLayer: do ->
				url = 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png'
				data = 
					key: "721f5fe14d2a4ae5bf8ecb6412263ce2"
					styleId: 22677
				return L.tileLayer(url, data)


)(app.module("BaseMap"), L, Backbone, $)