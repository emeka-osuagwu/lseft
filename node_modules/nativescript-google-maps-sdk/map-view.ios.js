"use strict";
var map_view_common_1 = require("./map-view-common");
var image_1 = require("ui/image");
var imageSource = require("image-source");
var MapViewDelegateImpl = (function (_super) {
    __extends(MapViewDelegateImpl, _super);
    function MapViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    MapViewDelegateImpl.initWithOwner = function (owner) {
        var handler = MapViewDelegateImpl.new();
        handler._owner = owner;
        return handler;
    };
    MapViewDelegateImpl.prototype.mapViewIdleAtCameraPosition = function (mapView, cameraPosition) {
        var owner = this._owner.get();
        if (owner) {
            owner._processingCameraEvent = true;
            var cameraChanged = false;
            if (owner.latitude != cameraPosition.target.latitude) {
                cameraChanged = true;
                owner._onPropertyChangedFromNative(map_view_common_1.MapView.latitudeProperty, cameraPosition.target.latitude);
            }
            if (owner.longitude != cameraPosition.target.longitude) {
                cameraChanged = true;
                owner._onPropertyChangedFromNative(map_view_common_1.MapView.longitudeProperty, cameraPosition.target.longitude);
            }
            if (owner.bearing != cameraPosition.bearing) {
                cameraChanged = true;
                owner._onPropertyChangedFromNative(map_view_common_1.MapView.bearingProperty, cameraPosition.bearing);
            }
            if (owner.zoom != cameraPosition.zoom) {
                cameraChanged = true;
                owner._onPropertyChangedFromNative(map_view_common_1.MapView.zoomProperty, cameraPosition.zoom);
            }
            if (owner.tilt != cameraPosition.viewingAngle) {
                cameraChanged = true;
                owner._onPropertyChangedFromNative(map_view_common_1.MapView.tiltProperty, cameraPosition.viewingAngle);
            }
            if (cameraChanged) {
                owner.notifyCameraEvent(map_view_common_1.MapView.cameraChangedEvent, {
                    latitude: cameraPosition.target.latitude,
                    longitude: cameraPosition.target.longitude,
                    zoom: cameraPosition.zoom,
                    bearing: cameraPosition.bearing,
                    tilt: cameraPosition.viewingAngle
                });
            }
            owner._processingCameraEvent = false;
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidTapAtCoordinate = function (mapView, coordinate) {
        var owner = this._owner.get();
        if (owner) {
            var position = Position.positionFromLatLng(coordinate.latitude, coordinate.longitude);
            owner.notifyPositionEvent(map_view_common_1.MapView.coordinateTappedEvent, position);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidLongPressAtCoordinate = function (mapView, coordinate) {
        var owner = this._owner.get();
        if (owner) {
            var position = Position.positionFromLatLng(coordinate.latitude, coordinate.longitude);
            owner.notifyPositionEvent(map_view_common_1.MapView.coordinateLongPressEvent, position);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidTapMarker = function (mapView, gmsMarker) {
        var owner = this._owner.get();
        if (owner) {
            var marker = owner.findMarker(function (marker) { return marker.ios == gmsMarker; });
            owner.notifyMarkerTapped(marker);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidTapOverlay = function (mapView, gmsOverlay) {
        var owner = this._owner.get();
        if (owner) {
            var shape = owner.findShape(function (shape) { return shape.ios == gmsOverlay; });
            if (shape) {
                owner.notifyShapeTapped(shape);
            }
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidBeginDraggingMarker = function (mapView, gmsMarker) {
        var owner = this._owner.get();
        if (owner) {
            var marker = owner.findMarker(function (marker) { return marker.ios == gmsMarker; });
            owner.notifyMarkerBeginDragging(marker);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidEndDraggingMarker = function (mapView, gmsMarker) {
        var owner = this._owner.get();
        if (owner) {
            var marker = owner.findMarker(function (marker) { return marker.ios == gmsMarker; });
            owner.notifyMarkerEndDragging(marker);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidDragMarker = function (mapView, gmsMarker) {
        var owner = this._owner.get();
        if (owner) {
            var marker = owner.findMarker(function (marker) { return marker.ios == gmsMarker; });
            owner.notifyMarkerDrag(marker);
        }
    };
    MapViewDelegateImpl.prototype.mapViewDidTapInfoWindowOfMarker = function (mapView, gmsMarker) {
        var owner = this._owner.get();
        if (owner) {
            var marker = owner.findMarker(function (marker) { return marker.ios == gmsMarker; });
            owner.notifyMarkerInfoWindowTapped(marker);
        }
    };
    MapViewDelegateImpl.ObjCProtocols = [GMSMapViewDelegate];
    return MapViewDelegateImpl;
}(NSObject));
var MapView = (function (_super) {
    __extends(MapView, _super);
    function MapView() {
        _super.call(this);
        this._markers = [];
        this._shapes = [];
        this._ios = GMSMapView.mapWithFrameCamera(CGRectZero, this._createCameraPosition());
    }
    MapView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate = MapViewDelegateImpl.initWithOwner(new WeakRef(this));
        var self = this;
        setTimeout(function () {
            self.notifyMapReady();
        }, 0);
    };
    MapView.prototype._createCameraPosition = function () {
        return GMSCameraPosition.cameraWithLatitudeLongitudeZoomBearingViewingAngle(this.latitude, this.longitude, this.zoom, this.bearing, this.tilt);
    };
    MapView.prototype.updateCamera = function () {
        this.ios.animateToCameraPosition(this._createCameraPosition());
    };
    MapView.prototype.setViewport = function (bounds, padding) {
        var p = UIEdgeInsetsMake(padding, padding, padding, padding) || this.gMap.padding;
        var cameraPosition = this.ios.cameraForBoundsInsets(bounds.ios, p);
        console.log(cameraPosition);
        this.ios.animateToCameraPosition(cameraPosition);
    };
    MapView.prototype.updatePadding = function () {
        if (this.padding) {
            this.gMap.padding = UIEdgeInsetsMake(this.padding[0] || 0, this.padding[2] || 0, this.padding[1] || 0, this.padding[3] || 0);
        }
    };
    Object.defineProperty(MapView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            console.warn('Cannot set value from outside this class');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "gMap", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    MapView.prototype.addMarker = function (marker) {
        marker.ios.map = this.gMap;
        this._markers.push(marker);
    };
    MapView.prototype.removeMarker = function (marker) {
        marker.ios.map = null;
        this._markers.splice(this._markers.indexOf(marker), 1);
    };
    MapView.prototype.removeAllMarkers = function () {
        this._markers.forEach(function (marker) {
            marker.ios.map = null;
        });
        this._markers = [];
    };
    MapView.prototype.findMarker = function (callback) {
        return this._markers.find(callback);
    };
    MapView.prototype.addPolyline = function (shape) {
        shape.loadPoints();
        shape.ios.map = this.gMap;
        this._shapes.push(shape);
    };
    MapView.prototype.addPolygon = function (shape) {
        shape.ios.map = this.gMap;
        this._shapes.push(shape);
    };
    MapView.prototype.addCircle = function (shape) {
        shape.ios.map = this.gMap;
        this._shapes.push(shape);
    };
    MapView.prototype.removeShape = function (shape) {
        shape.ios.map = null;
        this._shapes.splice(this._shapes.indexOf(shape), 1);
    };
    MapView.prototype.removeAllShapes = function () {
        this._shapes.forEach(function (shape) {
            shape.ios.map = null;
        });
        this._shapes = [];
    };
    MapView.prototype.findShape = function (callback) {
        return this._shapes.find(callback);
    };
    MapView.prototype.clear = function () {
        this._markers = [];
        this.ios.clear();
    };
    MapView.prototype.setStyle = function (style) {
        try {
            this._ios.mapStyle = GMSMapStyle.styleWithJSONStringError(JSON.stringify(style));
            return true;
        }
        catch (err) {
            return false;
        }
    };
    return MapView;
}(map_view_common_1.MapView));
exports.MapView = MapView;
var Bounds = (function (_super) {
    __extends(Bounds, _super);
    function Bounds() {
        _super.call(this);
    }
    Object.defineProperty(Bounds.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "southwest", {
        get: function () {
            return this._south;
        },
        set: function (southwest) {
            this._south = southwest.ios;
            if (this.northeast) {
                this._ios = GMSCoordinateBounds.alloc().initWithCoordinateCoordinate(this.southwest, this.northeast);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "northeast", {
        get: function () {
            return this._north;
        },
        set: function (northeast) {
            this._north = northeast.ios;
            if (this.southwest) {
                this._ios = GMSCoordinateBounds.alloc().initWithCoordinateCoordinate(this.southwest, this.northeast);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Bounds;
}(map_view_common_1.Bounds));
exports.Bounds = Bounds;
var Position = (function (_super) {
    __extends(Position, _super);
    function Position(ios) {
        _super.call(this);
        this._ios = ios || CLLocationCoordinate2DMake(0, 0);
    }
    Object.defineProperty(Position.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "latitude", {
        get: function () {
            return this._ios.latitude;
        },
        set: function (latitude) {
            this._ios = CLLocationCoordinate2DMake(latitude, this.longitude);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "longitude", {
        get: function () {
            return this._ios.longitude;
        },
        set: function (longitude) {
            this._ios = CLLocationCoordinate2DMake(this.latitude, longitude);
        },
        enumerable: true,
        configurable: true
    });
    Position.positionFromLatLng = function (latitude, longitude) {
        var position = new Position();
        position.latitude = latitude;
        position.longitude = longitude;
        return position;
    };
    return Position;
}(map_view_common_1.Position));
exports.Position = Position;
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        _super.call(this);
        this._ios = GMSMarker.new();
    }
    Object.defineProperty(Marker.prototype, "position", {
        get: function () {
            return new Position(this._ios.position);
        },
        set: function (position) {
            this._ios.position = position.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "rotation", {
        get: function () {
            return this._ios.rotation;
        },
        set: function (value) {
            this._ios.rotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "zIndex", {
        get: function () {
            return this._ios.zIndex;
        },
        set: function (value) {
            this._ios.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "title", {
        get: function () {
            return this._ios.title;
        },
        set: function (title) {
            this._ios.title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "snippet", {
        get: function () {
            return this._ios.snippet;
        },
        set: function (snippet) {
            this._ios.snippet = snippet;
        },
        enumerable: true,
        configurable: true
    });
    Marker.prototype.showInfoWindow = function () {
        this._ios.map.selectedMarker = this._ios;
    };
    Object.defineProperty(Marker.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            if (typeof value === 'string') {
                var tempIcon = new image_1.Image();
                tempIcon.imageSource = imageSource.fromResource(String(value));
                value = tempIcon;
            }
            this._icon = value;
            this._ios.icon = this._icon.ios.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "alpha", {
        get: function () {
            return this._ios.opacity;
        },
        set: function (value) {
            this._ios.opacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "flat", {
        get: function () {
            return this._ios.flat;
        },
        set: function (value) {
            this._ios.flat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "anchor", {
        get: function () {
            return [this._ios.groundAnchor.x, this._ios.groundAnchor.y];
        },
        set: function (value) {
            this._ios.groundAnchor = CGPointMake(value[0], value[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "draggable", {
        get: function () {
            return this._ios.draggable;
        },
        set: function (value) {
            this._ios.draggable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Marker;
}(map_view_common_1.Marker));
exports.Marker = Marker;
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        console.log("Polyline constructor");
        _super.call(this);
        this._ios = GMSPolyline.new();
        this._points = [];
    }
    Object.defineProperty(Polyline.prototype, "clickable", {
        get: function () {
            return this._ios.tappable;
        },
        set: function (value) {
            this._ios.tappable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "zIndex", {
        get: function () {
            return this._ios.zIndex;
        },
        set: function (value) {
            this._ios.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Polyline.prototype.loadPoints = function () {
        var points = GMSMutablePath.new();
        this._points.forEach(function (point) {
            points.addCoordinate(point.ios);
        }.bind(this));
        this._ios.path = points;
    };
    Polyline.prototype.reloadPoints = function () {
        this.loadPoints();
    };
    Object.defineProperty(Polyline.prototype, "width", {
        get: function () {
            return this._ios.strokeWidth;
        },
        set: function (value) {
            this._ios.strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this._ios.strokeColor = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "geodesic", {
        get: function () {
            return this._ios.geodesic;
        },
        set: function (value) {
            this._ios.geodesic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Polyline;
}(map_view_common_1.Polyline));
exports.Polyline = Polyline;
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        _super.call(this);
        this._ios = GMSPolygon.new();
        this._points = [];
    }
    Object.defineProperty(Polygon.prototype, "clickable", {
        get: function () {
            return this._ios.tappable;
        },
        set: function (value) {
            this._ios.tappable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "zIndex", {
        get: function () {
            return this._ios.zIndex;
        },
        set: function (value) {
            this._ios.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.loadPoints = function () {
        var points = GMSMutablePath.new();
        this._points.forEach(function (point) {
            points.addCoordinate(point.ios);
        }.bind(this));
        this._ios.path = points;
    };
    Polygon.prototype.reloadPoints = function () {
        this.loadPoints();
    };
    Object.defineProperty(Polygon.prototype, "strokeWidth", {
        get: function () {
            return this._ios.strokeWidth;
        },
        set: function (value) {
            this._ios.strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
            this._ios.strokeColor = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (value) {
            this._fillColor = value;
            this._ios.fillColor = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Polygon;
}(map_view_common_1.Polygon));
exports.Polygon = Polygon;
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this._ios = GMSCircle.new();
    }
    Object.defineProperty(Circle.prototype, "clickable", {
        get: function () {
            return this._ios.tappable;
        },
        set: function (value) {
            this._ios.tappable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "zIndex", {
        get: function () {
            return this._ios.zIndex;
        },
        set: function (value) {
            this._ios.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (value) {
            this._center = value;
            this._ios.position = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._ios.radius;
        },
        set: function (value) {
            this._ios.radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "strokeWidth", {
        get: function () {
            return this._ios.strokeWidth;
        },
        set: function (value) {
            this._ios.strokeWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
            this._ios.strokeColor = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (value) {
            this._fillColor = value;
            this._ios.fillColor = value.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}(map_view_common_1.Circle));
exports.Circle = Circle;
