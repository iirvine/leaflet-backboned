window.app = do ->
	modules = {}
	module: (name) ->
			if modules[name]
				return modules[name]
			return modules[name] = {}
	require: (name) ->
		if modules[name]
			return modules[name]
		else
			throw 'ModuleError: No module registered with name ' + name

_.extend(window.app, Backbone.Events)

$(document).ready ->
	Router = app.module("Routers").Router
	app.router = new Router