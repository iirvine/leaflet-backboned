((module) ->
	Views = app.module('Views')
	Models = app.module('Models')

	class module.Router extends Backbone.Router
		routes:
			"": "index"

		defaultCoords: [37.8, -96]

		initialize: ->
			@mapView = new Views.MapView
				mapModel : new Models.MapModel
				defaultView : 
					coords : @defaultCoords
					zoom : 4


)(app.module('Routers'))