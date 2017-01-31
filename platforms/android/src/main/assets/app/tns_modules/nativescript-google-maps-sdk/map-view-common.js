"use strict";
var view_1 = require("ui/core/view");
var dependency_observable_1 = require("ui/core/dependency-observable");
var MAP_VIEW = "MapView";
function onMapPropertyChanged(data) {
    var mapView = data.object;
    if (!mapView._processingCameraEvent)
        mapView.updateCamera();
}
function onPaddingPropertyChanged(data) {
    var mapView = data.object;
    mapView.updatePadding();
}
var MapView = (function (_super) {
    __extends(MapView, _super);
    function MapView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(MapView.prototype, "latitude", {
        get: function () {
            return this._getValue(MapView.latitudeProperty);
        },
        set: function (value) {
            this._setValue(MapView.latitudeProperty, parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "longitude", {
        get: function () {
            return this._getValue(MapView.longitudeProperty);
        },
        set: function (value) {
            this._setValue(MapView.longitudeProperty, parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "bearing", {
        get: function () {
            return this._getValue(MapView.bearingProperty);
        },
        set: function (value) {
            this._setValue(MapView.bearingProperty, parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "zoom", {
        get: function () {
            return this._getValue(MapView.zoomProperty);
        },
        set: function (value) {
            this._setValue(MapView.zoomProperty, parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "tilt", {
        get: function () {
            return this._getValue(MapView.tiltProperty);
        },
        set: function (value) {
            this._setValue(MapView.tiltProperty, parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "padding", {
        get: function () {
            return this._getValue(MapView.paddingProperty);
        },
        set: function (value) {
            this._setValue(MapView.paddingProperty, this._transformPadding(value));
        },
        enumerable: true,
        configurable: true
    });
    MapView.prototype._transformPadding = function (value) {
        if (!Array.isArray(value)) {
            value = String(value).split(',').map(function (v) {
                return parseInt(v, 10);
            });
        }
        if (value.length === 4) {
            return value;
        }
        else {
            return [0, 0, 0, 0];
        }
    };
    MapView.prototype.notifyMapReady = function () {
        this.notify({ eventName: MapView.mapReadyEvent, object: this, gMap: this.gMap });
    };
    MapView.prototype.removeAllPolylines = function () {
        var _this = this;
        this._shapes.forEach(function (shape) {
            if (shape.shape === 'polyline') {
                _this.removeShape(shape);
            }
        });
    };
    MapView.prototype.removeAllPolygons = function () {
        var _this = this;
        this._shapes.forEach(function (shape) {
            if (shape.shape === 'polygon') {
                _this.removeShape(shape);
            }
        });
    };
    MapView.prototype.removeAllCircles = function () {
        var _this = this;
        this._shapes.forEach(function (shape) {
            if (shape.shape === 'circle') {
                _this.removeShape(shape);
            }
        });
    };
    MapView.prototype.notifyMarkerEvent = function (eventName, marker) {
        var args = { eventName: eventName, object: this, marker: marker };
        this.notify(args);
    };
    MapView.prototype.notifyShapeEvent = function (eventName, shape) {
        var args = { eventName: eventName, object: this, shape: shape };
        this.notify(args);
    };
    MapView.prototype.notifyMarkerTapped = function (marker) {
        this.notifyMarkerEvent(MapView.markerSelectEvent, marker);
    };
    MapView.prototype.notifyMarkerInfoWindowTapped = function (marker) {
        this.notifyMarkerEvent(MapView.markerInfoWindowTappedEvent, marker);
    };
    MapView.prototype.notifyShapeTapped = function (shape) {
        this.notifyShapeEvent(MapView.shapeSelectEvent, shape);
    };
    MapView.prototype.notifyMarkerBeginDragging = function (marker) {
        this.notifyMarkerEvent(MapView.markerBeginDraggingEvent, marker);
    };
    MapView.prototype.notifyMarkerEndDragging = function (marker) {
        this.notifyMarkerEvent(MapView.markerEndDraggingEvent, marker);
    };
    MapView.prototype.notifyMarkerDrag = function (marker) {
        this.notifyMarkerEvent(MapView.markerDragEvent, marker);
    };
    MapView.prototype.notifyPositionEvent = function (eventName, position) {
        var args = { eventName: eventName, object: this, position: position };
        this.notify(args);
    };
    MapView.prototype.notifyCameraEvent = function (eventName, camera) {
        var args = { eventName: eventName, object: this, camera: camera };
        this.notify(args);
    };
    MapView.mapReadyEvent = "mapReady";
    MapView.markerSelectEvent = "markerSelect";
    MapView.markerInfoWindowTappedEvent = "markerInfoWindowTapped";
    MapView.shapeSelectEvent = "shapeSelect";
    MapView.markerBeginDraggingEvent = "markerBeginDragging";
    MapView.markerEndDraggingEvent = "markerEndDragging";
    MapView.markerDragEvent = "markerDrag";
    MapView.coordinateTappedEvent = "coordinateTapped";
    MapView.coordinateLongPressEvent = "coordinateLongPress";
    MapView.cameraChangedEvent = "cameraChanged";
    MapView.latitudeProperty = new dependency_observable_1.Property("latitude", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    MapView.longitudeProperty = new dependency_observable_1.Property("longitude", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    MapView.bearingProperty = new dependency_observable_1.Property("bearing", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    MapView.zoomProperty = new dependency_observable_1.Property("zoom", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    MapView.tiltProperty = new dependency_observable_1.Property("tilt", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    MapView.paddingProperty = new dependency_observable_1.Property("padding", MAP_VIEW, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onPaddingPropertyChanged));
    return MapView;
}(view_1.View));
exports.MapView = MapView;
var Position = (function () {
    function Position() {
    }
    return Position;
}());
exports.Position = Position;
var Bounds = (function () {
    function Bounds() {
    }
    return Bounds;
}());
exports.Bounds = Bounds;
var Marker = (function () {
    function Marker() {
    }
    return Marker;
}());
exports.Marker = Marker;
var Shape = (function () {
    function Shape() {
    }
    return Shape;
}());
exports.Shape = Shape;
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        _super.apply(this, arguments);
        this.shape = 'polyline';
    }
    Polyline.prototype.addPoint = function (point) {
        this._points.push(point);
        this.reloadPoints();
    };
    Polyline.prototype.addPoints = function (points) {
        this._points = this._points.concat(points);
        this.reloadPoints();
    };
    Polyline.prototype.removePoint = function (point) {
        var index = this._points.indexOf(point);
        if (index > -1) {
            this._points.splice(index, 1);
            this.reloadPoints();
        }
    };
    Polyline.prototype.removeAllPoints = function () {
        this._points.length = 0;
        this.reloadPoints();
    };
    Polyline.prototype.getPoints = function () {
        return this._points.slice();
    };
    return Polyline;
}(Shape));
exports.Polyline = Polyline;
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        _super.apply(this, arguments);
        this.shape = 'polygon';
    }
    Polygon.prototype.addPoint = function (point) {
        this._points.push(point);
        this.reloadPoints();
    };
    Polygon.prototype.addPoints = function (points) {
        this._points = this._points.concat(points);
        this.reloadPoints();
    };
    Polygon.prototype.removePoint = function (point) {
        var index = this._points.indexOf(point);
        if (index > -1) {
            this._points.splice(index, 1);
            this.reloadPoints();
        }
    };
    Polygon.prototype.removeAllPoints = function () {
        this._points.length = 0;
        this.reloadPoints();
    };
    Polygon.prototype.getPoints = function () {
        return this._points.slice();
    };
    return Polygon;
}(Shape));
exports.Polygon = Polygon;
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.apply(this, arguments);
        this.shape = 'circle';
    }
    return Circle;
}(Shape));
exports.Circle = Circle;
