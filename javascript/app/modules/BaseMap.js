// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(exports, L, B, $) {
    exports.MapView = (function(_super) {

      __extends(MapView, _super);

      function MapView() {
        return MapView.__super__.constructor.apply(this, arguments);
      }

      MapView.prototype.el = "#map";

      MapView.prototype.initialize = function(options) {
        if (options.el) {
          this.setElement(options.el);
        }
        if (options.defaultView) {
          this.defaultView = options.defaultView;
        }
        this.mapModel = options.mapModel;
        return this.createMap().addControl(new L.Control.Locate());
      };

      MapView.prototype.createMap = function(options) {
        this.map = L.map(this.el).setView(this.defaultView.coords, this.defaultView.zoom);
        this.map.on('load', app.trigger('map:ready'));
        this.addLayer(this.mapModel.get('baseLayer'));
        return this.map;
      };

      MapView.prototype.addLayer = function(layer) {
        return this.map.addLayer(layer);
      };

      return MapView;

    })(B.View);
    return exports.MapModel = (function(_super) {

      __extends(MapModel, _super);

      function MapModel() {
        return MapModel.__super__.constructor.apply(this, arguments);
      }

      MapModel.prototype.layers = [];

      MapModel.prototype.defaults = {
        baseLayer: (function() {
          var data, url;
          url = 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png';
          data = {
            key: "721f5fe14d2a4ae5bf8ecb6412263ce2",
            styleId: 22677
          };
          return L.tileLayer(url, data);
        })()
      };

      return MapModel;

    })(B.Model);
  })(app.module("BaseMap"), L, Backbone, $);

}).call(this);
