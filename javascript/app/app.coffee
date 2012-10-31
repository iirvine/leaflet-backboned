window.app = do ->
	modules = {}
	module: (name) ->
			if modules[name]
				return modules[name]
			return modules[name] = {}

_.extend(window.app, Backbone.Events)

$(document).ready ->
	Router = app.module("Routers").Router
	app.router = new Router