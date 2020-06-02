//Init BaseMaps
var basemaps = {
  "OpenStreetMaps": L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{id: "osm.streets"}),
  
  "Esri WorldTopoMap": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{id: "esri.topo"}),

  "Google Satellite": L.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{id: "google.satellite"})
};

//Map Options
var mapOptions = {
  zoomControl: false,
  attributionControl: false,
  center: [10, -66],
  zoom: 9,
  layers: [basemaps.OpenStreetMaps]
};

var map = L.map("map", mapOptions);

var overlays = {};


////////////////////////////////////////////////////////////////////////////////////////////
//Central
/////////////////////////////////////////////////////////////////////////////////////////////
///create icons
var cntIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/gtja77/tesis/master/icon/cnt.png',
  iconSize: [30, 30]
});

//create markers with different icons
function getCntMarker(feature, latlng) {
  return L.marker(latlng, {
    icon: cntIcon
  });
}

//attach popups to the markers
function getCntPopup(feature, layer) {
  layer.bindPopup("<h4>"+"<strong> Central: </strong>" +"<br/>"+ feature.properties.nom_centra + "</h4><hr>"
// +"<strong> Capacidad: </strong>"+feature.properties.capacidad+"<br/>"
// +"<strong> Proyecto: </strong>"+feature.properties.proyecto+"<br/>"
// +"<strong> Produccion: </strong>"+feature.properties.Produccion+"<br/>"
+"<strong> Direccion: </strong>"+feature.properties.direccion+"<br/>"
);
}

//create empty GeoJSON layers to be populated later
var cntLayer = L.geoJson(null, {
    pointToLayer: getCntMarker,
    onEachFeature: getCntPopup
});

//populate GeoJSON layers with data from external files
$.getJSON("https://raw.githubusercontent.com/gtja77/tesis/master/geojson/centrales.geojson", function(data) {cntLayer.addData(data);
});



////////////////////////////////////////////////////////////////////////////////////////////
//Centro Comercial
/////////////////////////////////////////////////////////////////////////////////////////////
///create icons
var comercialIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/gtja77/tesis/master/icon/centro_comercial1.png',
  iconSize: [30, 30]
});

//create markers with different icons
function getComercialMarker(feature, latlng) {
  return L.marker(latlng, {
    icon: comercialIcon
  });
}

//attach popups to the markers
function getPopup(feature, layer) {
  layer.bindPopup("<h4>"+"<strong> Centro Comercial: </strong>" +"<br/>"+ feature.properties.Name + "</h4><hr>");
}

//create empty GeoJSON layers to be populated later
var comercialLayer = L.geoJson(null, {
    pointToLayer: getComercialMarker,
    onEachFeature: getPopup
});

//populate GeoJSON layers with data from external files
$.getJSON("https://raw.githubusercontent.com/gtja77/tesis/master/geojson/centros_comerciales.geojson", function(data) {comercialLayer.addData(data);
});





/////////////////////////////////////////////////////////////////////////////////////////////
//FO CLIENTE
/////////////////////////////////////////////////////////////////////////////////////////////

function popup(feature, layer) { 
  if (feature.properties && feature.properties.central) 
  { 
    layer.bindPopup("<h4>"+"<strong> Central: </strong>" +"<br/>"+ feature.properties.central + "</h4><hr>"
+"<strong> Cliente: </strong>"+feature.properties.cliente+"<br/>"
+"<strong> N° FO: </strong>"+feature.properties.hilo+"<br/>"
+"<strong> Recorrido de FO (Mts.): </strong>"+feature.properties.long_m+"<br/>"
+"<strong> Dirección: </strong>"+feature.properties.dir_client+"<br/>"
); 
  } 
}

var fo_clientes = L.geoJson(null, {
  onEachFeature: popup
});


function estilofo_clientes(feature) {
  
 return {
    weight: 5,
    color: 'blue',
    opacity: 0.6,
    fillOpacity: 0.7,
   //dashArray: '3,15',
   // dashOffset:'15,3',
   // lineJoin: 'round',
  // lineCap: 'square',
   
   
  };
};
var fo_clientes = L.geoJson(null, {
  onEachFeature: popup,
  style: estilofo_clientes
});

$.getJSON("https://raw.githubusercontent.com/gtja77/tesis/master/geojson/fo_clientes.geojson", function (data) {
  attribution: '©SASPlanet'
  fo_clientes.addData(data);
});





var overlayMaps = {
  "Central<img src='https://raw.githubusercontent.com/gtja77/tesis/master/icon/cnt.png' height=26>":cntLayer,
  "Centros Comerciales <img src='https://raw.githubusercontent.com/gtja77/tesis/master/icon/centro_comercial1.png' height=26>": comercialLayer,
  "FO hasta el Cliente": fo_clientes
  //"Sin cobertura de consumo diario": no_consumo,
 // "Area de Estudio": delimitacion
  
};


//Render Zoom Control
L.control.zoom({position:"topleft"}).addTo(map);

var sidebar = L.control.sidebar({autopan: false, container: "sidebar", position: "right"}).addTo(map);

//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(basemaps, overlayMaps, {position: "topright", collapsed: false}).addTo(map);


var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
$(".leaflet-control-layers-list").prepend("<strong class='title'>Base Cartográficas</strong><br>");
$(".leaflet-control-layers-separator").after("<br><strong class='title'>Coberturas</strong>");


//Agregar Control Zoom
//L.control.scale({ imperial: false}).addTo(map);
L.control.scale ({metric:true, imperial:false, position: 'bottomleft'}).addTo (map);
L.control.polylineMeasure ({position:'topleft', 
                            unit:'metres', 
                            showBearings:true, 
                            clearMeasurementsOnStop: 
                            false, showClearControl: true, 
                            showUnitControl: true}).addTo (map);

//L.Control.boxzoom({ position: "topleft" }).addTo(map);