// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(exports) {
    var BaseMap;
    BaseMap = app.module('BaseMap');
    return exports.Router = (function(_super) {

      __extends(Router, _super);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.routes = {
        "": "index"
      };

      Router.prototype.defaultCoords = [37.8, -96];

      Router.prototype.initialize = function() {
        return this.mapView = new BaseMap.MapView({
          mapModel: new BaseMap.MapModel,
          defaultView: {
            coords: this.defaultCoords,
            zoom: 4
          }
        });
      };

      return Router;

    })(Backbone.Router);
  })(app.module('Routers'));

}).call(this);
