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


)(app.module("Views"), L, Backbone, $)