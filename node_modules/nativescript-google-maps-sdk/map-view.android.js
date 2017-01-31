"use strict";
var application = require("application");
var map_view_common_1 = require("./map-view-common");
var image_1 = require("ui/image");
var imageSource = require("image-source");
var MapView = (function (_super) {
    __extends(MapView, _super);
    function MapView() {
        _super.call(this);
        this._markers = [];
        this._shapes = [];
    }
    MapView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        application.android.on(application.AndroidApplication.activityPausedEvent, this.onActivityPaused, this);
        application.android.on(application.AndroidApplication.activityResumedEvent, this.onActivityResumed, this);
        application.android.on(application.AndroidApplication.saveActivityStateEvent, this.onActivitySaveInstanceState, this);
        application.android.on(application.AndroidApplication.activityDestroyedEvent, this.onActivityDestroyed, this);
    };
    MapView.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        application.android.off(application.AndroidApplication.activityPausedEvent, this.onActivityPaused, this);
        application.android.off(application.AndroidApplication.activityResumedEvent, this.onActivityResumed, this);
        application.android.off(application.AndroidApplication.saveActivityStateEvent, this.onActivitySaveInstanceState, this);
        application.android.off(application.AndroidApplication.activityDestroyedEvent, this.onActivityDestroyed, this);
    };
    MapView.prototype._createCameraPosition = function () {
        var cpBuilder = new com.google.android.gms.maps.model.CameraPosition.Builder();
        var update = false;
        if (!isNaN(this.latitude) && !isNaN(this.longitude)) {
            update = true;
            cpBuilder.target(new com.google.android.gms.maps.model.LatLng(this.latitude, this.longitude));
        }
        if (!isNaN(this.bearing)) {
            update = true;
            cpBuilder.bearing(this.bearing);
        }
        if (!isNaN(this.zoom)) {
            update = true;
            cpBuilder.zoom(this.zoom);
        }
        if (!isNaN(this.tilt)) {
            update = true;
            cpBuilder.tilt(this.tilt);
        }
        return (update) ? cpBuilder.build() : null;
    };
    MapView.prototype.updateCamera = function () {
        var cameraPosition = this._createCameraPosition();
        if (!cameraPosition)
            return;
        if (!this.gMap) {
            this._pendingCameraUpdate = true;
            return;
        }
        this._pendingCameraUpdate = false;
        var cameraUpdate = com.google.android.gms.maps.CameraUpdateFactory.newCameraPosition(cameraPosition);
        this.gMap.moveCamera(cameraUpdate);
    };
    MapView.prototype.setViewport = function (bounds, padding) {
        var p = padding || 0;
        var cameraUpdate = com.google.android.gms.maps.CameraUpdateFactory.newLatLngBounds(bounds.android, p);
        if (!this.gMap) {
            this._pendingCameraUpdate = true;
            return;
        }
        this._pendingCameraUpdate = false;
        this.gMap.moveCamera(cameraUpdate);
    };
    MapView.prototype.updatePadding = function () {
        if (this.padding && this.gMap) {
            this.gMap.setPadding(this.padding[2] || 0, this.padding[0] || 0, this.padding[3] || 0, this.padding[1] || 0);
        }
    };
    Object.defineProperty(MapView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            console.warn('Cannot set value from outside this class');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapView.prototype, "gMap", {
        get: function () {
            return this._gMap;
        },
        enumerable: true,
        configurable: true
    });
    MapView.prototype.addMarker = function (marker) {
        marker.android = this.gMap.addMarker(marker.android);
        this._markers.push(marker);
    };
    MapView.prototype.removeMarker = function (marker) {
        marker.android.remove();
        this._markers.splice(this._markers.indexOf(marker), 1);
    };
    MapView.prototype.removeAllMarkers = function () {
        this._markers.forEach(function (marker) {
            marker.android.remove();
        });
        this._markers = [];
    };
    MapView.prototype.findMarker = function (callback) {
        return this._markers.find(callback);
    };
    MapView.prototype.addPolyline = function (shape) {
        shape.loadPoints();
        shape.android = this.gMap.addPolyline(shape.android);
        this._shapes.push(shape);
    };
    MapView.prototype.addPolygon = function (shape) {
        shape.loadPoints();
        shape.android = this.gMap.addPolygon(shape.android);
        this._shapes.push(shape);
    };
    MapView.prototype.addCircle = function (shape) {
        shape.android = this.gMap.addCircle(shape.android);
        this._shapes.push(shape);
    };
    MapView.prototype.removeShape = function (shape) {
        shape.android.remove();
        this._shapes.splice(this._shapes.indexOf(shape), 1);
    };
    MapView.prototype.removeAllShapes = function () {
        this._shapes.forEach(function (shape) {
            shape.android.remove();
        });
        this._shapes = [];
    };
    MapView.prototype.clear = function () {
        this._markers = [];
        this._shapes = [];
        this.gMap.clear();
    };
    MapView.prototype.setStyle = function (style) {
        var styleOptions = new com.google.android.gms.maps.model.MapStyleOptions(JSON.stringify(style));
        return this.gMap.setMapStyle(styleOptions);
    };
    MapView.prototype.findShape = function (callback) {
        return this._shapes.find(callback);
    };
    MapView.prototype.onActivityPaused = function (args) {
        if (!this.android || this._context != args.activity)
            return;
        this.android.onPause();
    };
    MapView.prototype.onActivityResumed = function (args) {
        if (!this.android || this._context != args.activity)
            return;
        this.android.onResume();
    };
    MapView.prototype.onActivitySaveInstanceState = function (args) {
        if (!this.android || this._context != args.activity)
            return;
        this.android.onSaveInstanceState(args.bundle);
    };
    MapView.prototype.onActivityDestroyed = function (args) {
        if (!this.android || this._context != args.activity)
            return;
        this.android.onDestroy();
    };
    MapView.prototype._createUI = function () {
        var that = new WeakRef(this);
        var cameraPosition = this._createCameraPosition();
        var options = new com.google.android.gms.maps.GoogleMapOptions();
        if (cameraPosition)
            options = options.camera(cameraPosition);
        this._android = new com.google.android.gms.maps.MapView(this._context, options);
        this._android.onCreate(null);
        this._android.onResume();
        var mapReadyCallback = new com.google.android.gms.maps.OnMapReadyCallback({
            onMapReady: function (gMap) {
                var owner = that.get();
                owner._gMap = gMap;
                owner.updatePadding();
                if (owner._pendingCameraUpdate) {
                    owner.updateCamera();
                }
                gMap.setOnMapClickListener(new com.google.android.gms.maps.GoogleMap.OnMapClickListener({
                    onMapClick: function (gmsPoint) {
                        var position = new Position(gmsPoint);
                        owner.notifyPositionEvent(map_view_common_1.MapView.coordinateTappedEvent, position);
                    }
                }));
                gMap.setOnMapLongClickListener(new com.google.android.gms.maps.GoogleMap.OnMapLongClickListener({
                    onMapLongClick: function (gmsPoint) {
                        var position = new Position(gmsPoint);
                        owner.notifyPositionEvent(map_view_common_1.MapView.coordinateLongPressEvent, position);
                    }
                }));
                gMap.setOnMarkerClickListener(new com.google.android.gms.maps.GoogleMap.OnMarkerClickListener({
                    onMarkerClick: function (gmsMarker) {
                        var marker = owner.findMarker(function (marker) { return marker.android.getId() === gmsMarker.getId(); });
                        owner.notifyMarkerTapped(marker);
                        return false;
                    }
                }));
                gMap.setOnInfoWindowClickListener(new com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener({
                    onInfoWindowClick: function (gmsMarker) {
                        var marker = owner.findMarker(function (marker) { return marker.android.getId() === gmsMarker.getId(); });
                        owner.notifyMarkerInfoWindowTapped(marker);
                        return false;
                    }
                }));
                gMap.setOnCircleClickListener(new com.google.android.gms.maps.GoogleMap.OnCircleClickListener({
                    onCircleClick: function (gmsCircle) {
                        var shape = owner.findShape(function (shape) { return shape.android.getId() === gmsCircle.getId(); });
                        if (shape) {
                            owner.notifyShapeTapped(shape);
                        }
                        return false;
                    }
                }));
                gMap.setOnPolylineClickListener(new com.google.android.gms.maps.GoogleMap.OnPolylineClickListener({
                    onPolylineClick: function (gmsPolyline) {
                        var shape = owner.findShape(function (shape) { return shape.android.getId() === gmsPolyline.getId(); });
                        if (shape) {
                            owner.notifyShapeTapped(shape);
                        }
                        return false;
                    }
                }));
                gMap.setOnPolygonClickListener(new com.google.android.gms.maps.GoogleMap.OnPolygonClickListener({
                    onPolygonClick: function (gmsPolygon) {
                        var shape = owner.findShape(function (shape) { return shape.android.getId() === gmsPolygon.getId(); });
                        if (shape) {
                            owner.notifyShapeTapped(shape);
                        }
                        return false;
                    }
                }));
                gMap.setOnMarkerDragListener(new com.google.android.gms.maps.GoogleMap.OnMarkerDragListener({
                    onMarkerDrag: function (gmsMarker) {
                        var marker = owner.findMarker(function (marker) { return marker.android.getId() === gmsMarker.getId(); });
                        owner.notifyMarkerDrag(marker);
                    },
                    onMarkerDragEnd: function (gmsMarker) {
                        var marker = owner.findMarker(function (marker) { return marker.android.getId() === gmsMarker.getId(); });
                        owner.notifyMarkerEndDragging(marker);
                    },
                    onMarkerDragStart: function (gmsMarker) {
                        var marker = owner.findMarker(function (marker) { return marker.android.getId() === gmsMarker.getId(); });
                        owner.notifyMarkerBeginDragging(marker);
                    }
                }));
                gMap.setOnCameraChangeListener(new com.google.android.gms.maps.GoogleMap.OnCameraChangeListener({
                    onCameraChange: function (cameraPosition) {
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
                        if (owner.tilt != cameraPosition.tilt) {
                            cameraChanged = true;
                            owner._onPropertyChangedFromNative(map_view_common_1.MapView.tiltProperty, cameraPosition.tilt);
                        }
                        if (cameraChanged) {
                            owner.notifyCameraEvent(map_view_common_1.MapView.cameraChangedEvent, {
                                latitude: cameraPosition.target.latitude,
                                longitude: cameraPosition.target.longitude,
                                zoom: cameraPosition.zoom,
                                bearing: cameraPosition.bearing,
                                tilt: cameraPosition.tilt
                            });
                        }
                        owner._processingCameraEvent = false;
                    }
                }));
                owner.notifyMapReady();
            }
        });
        this._android.getMapAsync(mapReadyCallback);
    };
    return MapView;
}(map_view_common_1.MapView));
exports.MapView = MapView;
var Position = (function (_super) {
    __extends(Position, _super);
    function Position(android) {
        _super.call(this);
        this._android = android || new com.google.android.gms.maps.model.LatLng(0, 0);
    }
    Object.defineProperty(Position.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "latitude", {
        get: function () {
            return this._android.latitude;
        },
        set: function (latitude) {
            this._android = new com.google.android.gms.maps.model.LatLng(parseFloat(latitude), this.longitude);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "longitude", {
        get: function () {
            return this._android.longitude;
        },
        set: function (longitude) {
            this._android = new com.google.android.gms.maps.model.LatLng(this.latitude, parseFloat(longitude));
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
var Bounds = (function (_super) {
    __extends(Bounds, _super);
    function Bounds() {
        _super.call(this);
    }
    Object.defineProperty(Bounds.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "southwest", {
        get: function () {
            return this._south;
        },
        set: function (southwest) {
            this._south = southwest.android;
            if (this.northeast) {
                this._android = new com.google.android.gms.maps.model.LatLngBounds(this.southwest, this.northeast);
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
            this._north = northeast.android;
            if (this.southwest) {
                this._android = new com.google.android.gms.maps.model.LatLngBounds(this.southwest, this.northeast);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Bounds;
}(map_view_common_1.Bounds));
exports.Bounds = Bounds;
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        _super.call(this);
        this._isMarker = false;
        this.android = new com.google.android.gms.maps.model.MarkerOptions();
    }
    Object.defineProperty(Marker.prototype, "position", {
        get: function () {
            return new Position(this._android.getPosition());
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setPosition(value.android);
            }
            else {
                this._android.position(value.android);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "rotation", {
        get: function () {
            return this._android.getRotation();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setRotation(value);
            }
            else {
                this._android.rotation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "zIndex", {
        get: function () {
            return this._android.getZIndex();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setZIndex(value);
            }
            else {
                this._android.zIndex(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "title", {
        get: function () {
            return this._android.getTitle();
        },
        set: function (title) {
            if (this._isMarker) {
                this._android.setTitle(title);
            }
            else {
                this._android.title(title);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "snippet", {
        get: function () {
            return this._android.getSnippet();
        },
        set: function (snippet) {
            if (this._isMarker) {
                this._android.setSnippet(snippet);
            }
            else {
                this._android.snippet(snippet);
            }
        },
        enumerable: true,
        configurable: true
    });
    Marker.prototype.showInfoWindow = function () {
        if (this._isMarker) {
            this.android.showInfoWindow();
        }
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
            var androidIcon = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(value.imageSource.android);
            if (this._isMarker) {
                this._android.setIcon(androidIcon);
            }
            else {
                this._android.icon(androidIcon);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "alpha", {
        get: function () {
            return this._android.getAlpha();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setAlpha(value);
            }
            else {
                this._android.alpha(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "flat", {
        get: function () {
            return this._android.isFlat();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setFlat(value);
            }
            else {
                this._android.flat(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "anchor", {
        get: function () {
            return [this._android.getAnchorU(), this._android.getAnchorV()];
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setAnchor(value[0], value[1]);
            }
            else {
                this._android.anchor(value[0], value[1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "draggable", {
        get: function () {
            return this._android.isDraggable();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setDraggable(value);
            }
            else {
                this._android.draggable(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "visible", {
        get: function () {
            return this._android.isVisible();
        },
        set: function (value) {
            if (this._isMarker) {
                this._android.setVisible(value);
            }
            else {
                this._android.visible(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (android) {
            this._android = android;
            this._isMarker = android.getClass().getName() === Marker.CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Marker.CLASS = 'com.google.android.gms.maps.model.Marker';
    return Marker;
}(map_view_common_1.Marker));
exports.Marker = Marker;
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        _super.call(this);
        this._isReal = false;
        this.android = new com.google.android.gms.maps.model.PolylineOptions();
        this._points = [];
    }
    Object.defineProperty(Polyline.prototype, "clickable", {
        get: function () {
            return this._android.isClickable();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setClickable(value);
            }
            else {
                this._android.clickable(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "zIndex", {
        get: function () {
            return this._android.getZIndex();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setZIndex(value);
            }
            else {
                this._android.zIndex(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "visible", {
        get: function () {
            return this._android.isVisible();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setVisible(value);
            }
            else {
                this._android.visible(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Polyline.prototype.loadPoints = function () {
        if (!this._isReal) {
            this._points.forEach(function (point) {
                this._android.add(point.android);
            }.bind(this));
        }
    };
    Polyline.prototype.reloadPoints = function () {
        if (this._isReal) {
            var points = new java.util.ArrayList();
            this._points.forEach(function (point) {
                points.add(point.android);
            }.bind(this));
            this._android.setPoints(points);
        }
    };
    Object.defineProperty(Polyline.prototype, "width", {
        get: function () {
            return this._android.getStrokeWidth();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setWidth(value);
            }
            else {
                this._android.width(value);
            }
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
            if (this._isReal) {
                this._android.setStrokeColor(value.android);
            }
            else {
                this._android.color(value.android);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "geodesic", {
        get: function () {
            return this._android.isGeodesic();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setGeodesic(value);
            }
            else {
                this._android.geodesic(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polyline.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (android) {
            this._android = android;
            this._isReal = android.getClass().getName() === Polyline.CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Polyline.CLASS = 'com.google.android.gms.maps.model.Polyline';
    return Polyline;
}(map_view_common_1.Polyline));
exports.Polyline = Polyline;
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        _super.call(this);
        this._isReal = false;
        this.android = new com.google.android.gms.maps.model.PolygonOptions();
        this._points = [];
    }
    Object.defineProperty(Polygon.prototype, "clickable", {
        get: function () {
            return this._android.isClickable();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setClickable(value);
            }
            else {
                this._android.clickable(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "zIndex", {
        get: function () {
            return this._android.getZIndex();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setZIndex(value);
            }
            else {
                this._android.zIndex(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "visible", {
        get: function () {
            return this._android.isVisible();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setVisible(value);
            }
            else {
                this._android.visible(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Polygon.prototype.loadPoints = function () {
        if (!this._isReal) {
            this._points.forEach(function (point) {
                this._android.add(point.android);
            }.bind(this));
        }
    };
    Polygon.prototype.reloadPoints = function () {
        if (this._isReal) {
            var points = new java.util.ArrayList();
            this._points.forEach(function (point) {
                points.add(point.android);
            }.bind(this));
            this._android.setPoints(points);
        }
    };
    Object.defineProperty(Polygon.prototype, "strokeWidth", {
        get: function () {
            return this._android.getStrokeWidth();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setStrokeWidth(value);
            }
            else {
                this._android.strokeWidth(value);
            }
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
            if (this._isReal) {
                this._android.setStrokeColor(value.android);
            }
            else {
                this._android.strokeColor(value.android);
            }
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
            if (this._isReal) {
                this._android.setFillColor(value.android);
            }
            else {
                this._android.fillColor(value.android);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (android) {
            this._android = android;
            this._isReal = android.getClass().getName() === Polygon.CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Polygon.CLASS = 'com.google.android.gms.maps.model.Polygon';
    return Polygon;
}(map_view_common_1.Polygon));
exports.Polygon = Polygon;
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this._isReal = false;
        this.android = new com.google.android.gms.maps.model.CircleOptions();
    }
    Object.defineProperty(Circle.prototype, "clickable", {
        get: function () {
            return this._android.isClickable();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setClickable(value);
            }
            else {
                this._android.clickable(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "zIndex", {
        get: function () {
            return this._android.getZIndex();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setZIndex(value);
            }
            else {
                this._android.zIndex(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "visible", {
        get: function () {
            return this._android.isVisible();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setVisible(value);
            }
            else {
                this._android.visible(value);
            }
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
            if (this._isReal) {
                this._android.setCenter(value.android);
            }
            else {
                this._android.center(value.android);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._android.getRadius();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setRadius(value);
            }
            else {
                this._android.radius(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "strokeWidth", {
        get: function () {
            return this._android.getStrokeWidth();
        },
        set: function (value) {
            if (this._isReal) {
                this._android.setStrokeWidth(value);
            }
            else {
                this._android.strokeWidth(value);
            }
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
            if (this._isReal) {
                this._android.setStrokeColor(value.android);
            }
            else {
                this._android.strokeColor(value.android);
            }
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
            if (this._isReal) {
                this._android.setFillColor(value.android);
            }
            else {
                this._android.fillColor(value.android);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (android) {
            this._android = android;
            this._isReal = android.getClass().getName() === Circle.CLASS;
        },
        enumerable: true,
        configurable: true
    });
    Circle.CLASS = 'com.google.android.gms.maps.model.Circle';
    return Circle;
}(map_view_common_1.Circle));
exports.Circle = Circle;
