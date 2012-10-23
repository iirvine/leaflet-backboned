L.Control.Locate = L.Control.extend
	options:
		position: 'topright'

	initialize: (options) ->
		L.Util.setOptions(this, options)

	onAdd: (map) ->
		className = 'leaflet-control-locate'
		container = L.DomUtil.create('div', className)
		@_map = map
		@_createButton('Locate Me', className, container, @_locate, this)
		return container

	_createButton: (title, className, container, fn, context) ->
		link = L.DomUtil.create('a', className, container)
		link.href = '#'
		link.title = title
		L.DomEvent
			.on(link, 'click', L.DomEvent.preventDefault)
			.on(link, 'click', fn, context)

		L.DomEvent.disableClickPropagation(link)
		return link

	_locate: ->
		@_map.locate
			setView: true
			maxZoom: @options.maxZoom || 12