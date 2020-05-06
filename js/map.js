var map = L.map('map', {
    center: [10.233876086633025, -66.6637728436883],
    zoom: 15,
    minZoom: 1,
    maxZoom: 24
});

//Carga de Lienzos OpenStreetMaps y Esri

var basemapOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '©OpenStreetMap'
});


var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '©Esri'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '©Esri'
});

//var Google_Satellite = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
//  attribution: '©Esri'
//});



basemapOSM.addTo(map);


//Cargando archivo GeoJson

    //Nodos
    //
    
var equip_sites = L.geoJson(null);
let geojson_url = "https://raw.githubusercontent.com/gtja77/tesis/master/equip_sites.geojson"

let addGeoLayer = (data) => {
    let geojsonLayer = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties['arbol_nombre'])
      layer.setIcon(treeMarker);
    }}).addTo(map)
    map.fitBounds(geojsonLayer.getBounds())
}

fetch(
  geojson_url
).then(
  res => res.json()
).then(
  data => addGeoLayer(data)
)

    //FO Clientes

//var equip_inm = L.geoJson(null);


$//.getJSON("/home/cantv/webmapping/geojson/equip_inm.geojson", function(data){
  //equip_inm.addData(data);
//});

//equip_inm.addTo(map);

//Cargando Control de Capas

var baseMaps = {
    "OpenStreetMaps": basemapOSM,
    "Esri_World TopoMap": Esri_WorldTopoMap,
    "Esri World Imagery": Esri_WorldImagery
   // "Google Satellite": Google_Satellite
};

var overlayMaps = {
    "Equipamiento Urbano": equip_sites
    //"Uso del Inmueble": equip_inm
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: true // false
}).addTo(map);

L.control.scale().addTo(map);

//Agregar Control Zoom

L.Control.boxzoom({ position:'topleft' }).addTo(map);

//Agregando