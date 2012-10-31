((exports) ->
	BaseMap = app.module('BaseMap')

	class exports.Router extends Backbone.Router
		routes:
			"": "index"

		defaultCoords: [37.8, -96]

		initialize: ->
			@mapView = new BaseMap.MapView
				mapModel : new BaseMap.MapModel
				defaultView : 
					coords : @defaultCoords
					zoom : 4


)(app.module('Routers'))