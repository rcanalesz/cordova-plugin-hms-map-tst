/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
declare class HuaweiMap {
    id: string;
    element: HTMLElement | null;
    props: HuaweiMapProps;
    init(id: string, options: HuaweiMapOptions): Promise<any>;
    reInitializeMap(): Promise<any>;
    destroy(): Promise<any>;
    hide(): Promise<any>;
    show(): Promise<any>;
    /**
     * Set a property of a map instance.
     *
     * This function can be called in two ways:
     * ```
     *     mapInstance.set('propName', propValue)
     * ```
     * or
     * ```
     *     mapInstance.set({propName: propValue, prop2Name: prop2Value})
     * ```
     */
    set(propName: string | object, value?: any): Promise<void>;
    /**
     * Get a property of a map instance.
     *
     * This function can be called in two ways:
     * ```
     *     mapInstance.get('propName')
     * ```
     * or
     * ```
     *     const properties = mapInstance.get(); // or mapInstance.get('all')
     *     properties.propName;
     * ```
     * The second example will return an object that contains all the properties of the given map
     * instance.
     */
    get(propName?: string): Promise<any>;
    /**
     * Register a map event.
     */
    on(eventName: MapEvent, handler: (data: any, data2?: any) => void): Promise<any>;
    scroll(): Promise<any>;
    clear(): Promise<any>;
    resetMinMaxZoomPreference(): Promise<any>;
    moveCamera(opts: CameraUpdate): Promise<any>;
    animateCamera(opts: CameraUpdate): Promise<any>;
    addPolyline(opts: PolylineOptions): Promise<Polyline>;
    addPolygon(opts: PolygonOptions): Promise<Polygon>;
    addMarker(opts: MarkerOptions): Promise<Marker>;
    addGroundOverlay(opts: GroundOverlayOptions): Promise<GroundOverlay>;
    addCircle(opts: CircleOptions): Promise<Circle>;
    dispatch(obj: any): Promise<any>;
    runAction(act: string, opts?: any): Promise<any>;
    private refreshProps;
    private handleMutation;
}
export interface LatLng {
    lat: number;
    lng: number;
}
export interface PatternItem {
    type?: PatternItemType;
    length?: number;
}
export interface Anchor {
    u: number;
    v: number;
}
export interface Bitmap {
    hue?: Hue;
    asset?: string;
    fileName?: string;
    path?: string;
}
export interface LatLngBounds {
    southwest: LatLng;
    northeast: LatLng;
    center?: LatLng;
}
export interface GroundOverlayPosition {
    width?: number;
    height?: number;
    latLng?: LatLng;
    latLngBounds?: LatLngBounds;
}
export interface Cap {
    type?: CapType;
    refWidth?: number;
    bitmapDescriptor?: Bitmap;
}
export interface CircleOptions {
    center?: LatLng;
    clickable?: boolean;
    fillColor?: Color;
    radius?: number;
    strokeColor?: Color;
    strokeWidth?: number;
    strokePattern?: PatternItem;
    visible?: boolean;
    zIndex?: number;
}
export interface GroundOverlayOptions {
    anchor?: Anchor;
    bearing?: number;
    clickable?: boolean;
    image?: Bitmap;
    visible?: boolean;
    transparency?: number;
    zIndex?: number;
    position?: GroundOverlayPosition;
}
export interface MarkerOptions {
    anchorMarker?: Anchor;
    infoWindowAnchor?: Anchor;
    alpha?: number;
    clusterable?: boolean;
    draggable?: boolean;
    icon?: Bitmap;
    flat?: boolean;
    position?: LatLng;
    rotation?: number;
    snippet?: string;
    title?: string;
    visible?: boolean;
    zIndex?: number;
}
export interface PolygonOptions {
    points?: LatLng[];
    holes?: LatLng[][];
    clickable?: boolean;
    geodesic?: boolean;
    fillColor?: Color;
    strokeColor?: Color;
    strokeJointType?: JointType;
    strokePattern?: PatternItem;
    strokeWidth?: number;
    visible?: boolean;
    zIndex?: number;
}
export interface PolylineOptions {
    points?: LatLng[];
    clickable?: boolean;
    color?: Color;
    endCap?: Cap;
    startCap?: Cap;
    geodesic?: boolean;
    jointType?: JointType;
    visible?: boolean;
    zIndex?: number;
    width?: number;
}
interface HuaweiMapProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    paddingLeft?: number;
    paddingTop?: number;
    borderLeft?: number;
    borderTop?: number;
}
export interface HuaweiMapOptions {
    mapType?: MapType;
    zoomControlsEnabled?: boolean;
    compassEnabled?: boolean;
    zoomGesturesEnabled?: boolean;
    scrollGesturesEnabled?: boolean;
    rotateGesturesEnabled?: boolean;
    tiltGesturesEnabled?: boolean;
    zOrderOnTop?: boolean;
    liteMode?: boolean;
    ambientEnabled?: boolean;
    minZoomPreference?: number;
    maxZoomPreference?: number;
    cameraPosition?: CameraPosition;
    latLngBounds?: LatLngBounds;
}
export interface CameraPosition {
    target?: LatLng;
    zoom?: number;
    bearing?: number;
    tilt?: number;
}
export interface LocationPermissionResult {
    hasLocationPermission: boolean;
}
export interface ComputeDistanceResult {
    result: number;
}
export interface ComputeDistance {
    from?: LatLng;
    to?: LatLng;
}
export interface CameraUpdate {
    method?: CameraUpdateMethod;
    [other: string]: any;
}
interface BaseMapObject<T> {
    set(propName: string, propValue: any): Promise<any>;
    set(keyVals: any): Promise<any>;
    update(): Promise<T>;
    remove(): Promise<any>;
    [other: string]: any;
}
interface Polyline extends BaseMapObject<Polyline> {
}
interface Polygon extends BaseMapObject<Polygon> {
}
interface Circle extends BaseMapObject<Circle> {
}
interface GroundOverlay extends BaseMapObject<GroundOverlay> {
}
interface Marker extends BaseMapObject<Marker> {
    showInfoWindow(): Promise<void>;
    hideInfoWindow(): Promise<void>;
}
export declare function init(): Promise<void>;
export declare function setApiKey(apiKey: string): Promise<void>;
export declare function create(divId: string, huaweiMapOptions: HuaweiMapOptions): Promise<HuaweiMap>;
export declare function computeDistanceBetween(arg: ComputeDistance): Promise<ComputeDistanceResult>;
export declare function hasLocationPermission(): Promise<LocationPermissionResult>;
export declare function requestLocationPermission(): Promise<void>;
export declare function loadMap(jsonMap: string): Promise<HuaweiMap>;
export declare enum PatternItemType {
    TYPE_GAP = 2,
    TYPE_DOT = 1,
    TYPE_DASH = 0
}
export declare enum JointType {
    ROUND = 2,
    BEVEL = 1,
    DEFAULT = 0
}
export declare enum CapType {
    TYPE_BUTT_CAP = 0,
    TYPE_SQUARE_CAP = 1,
    TYPE_ROUND_CAP = 2,
    TYPE_CUSTOM_CAP = 3
}
export declare enum CameraMoveReason {
    REASON_DEVELOPER_ANIMATION = 3,
    REASON_API_ANIMATION = 2,
    REASON_GESTURE = 1
}
export declare enum Color {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0
}
export declare enum MapType {
    MAP_TYPE_NONE = 0,
    MAP_TYPE_SATELLITE = 2,
    MAP_TYPE_NORMAL = 1,
    MAP_TYPE_HYBRID = 4,
    MAP_TYPE_TERRAIN = 3
}
export declare enum MarkerEvent {
    MARKER_DRAG = 2,
    MARKER_DRAG_END = 3,
    MARKER_DRAG_START = 1
}
export declare enum Hue {
    HUE_GREEN = 120,
    HUE_AZURE = 210,
    HUE_ROSE = 330,
    HUE_CYAN = 180,
    HUE_ORANGE = 30,
    HUE_MAGENTA = 300,
    HUE_VIOLET = 270,
    HUE_YELLOW = 60,
    HUE_BLUE = 240,
    HUE_RED = 0
}
export declare enum MapEvent {
    CIRCLE_CLICK = "circleClick",
    MAP_CLICK = "mapClick",
    MAP_LONG_CLICK = "mapLongClick",
    INFO_WINDOW_CLICK = "infoWindowClick",
    CAMERA_MOVE_STARTED = "cameraMoveStarted",
    POLYGON_CLICK = "polygonClick",
    POLYLINE_CLICK = "polylineClick",
    GROUND_OVERLAY_CLICK = "groundOverlayClick",
    CAMERA_MOVE = "cameraMove",
    CAMERA_IDLE = "cameraIdle",
    MAP_LOADED = "mapLoaded",
    MARKER_CLICK = "markerClick",
    MY_LOCATION_BUTTON_CLICK = "myLocationButtonClick",
    MY_LOCATION_CLICK = "myLocationClick",
    MARKER_DRAG = "markerDrag"
}
export declare enum CameraUpdateMethod {
    CAMERA_POSITION = "newCameraPosition",
    LATLNG = "newLatLng",
    LATLNG_BOUNDS = "newLatLngBounds",
    LATLNG_ZOOM = "newLatLngZoom",
    SCROLL_BY = "scrollBy",
    ZOOM_BY = "zoomBy",
    ZOOM_IN = "zoomIn",
    ZOOM_OUT = "zoomOut",
    ZOOM_TO = "zoomTo"
}
export {};
