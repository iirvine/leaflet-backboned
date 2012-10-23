((exports, B, L) ->
	class exports.MapModel extends B.Model
		layers: []

		defaults:
			baseLayer: do ->
				url = 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png'
				data = 
					key: "721f5fe14d2a4ae5bf8ecb6412263ce2"
					styleId: 22677
				return L.tileLayer(url, data)
	
)(app.module("Models"), Backbone, L)