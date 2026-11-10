

 // Crear un objeto mapa
 // Convertir el elemento HTML con id "map" en un mapa interactivo
var map = L.map("map").setView([-9.195, -74.932], 5);
// [latitud, longitud], nivel de zoom

// Enlazar OpenStreetMap como mapa base
var osm = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }
).addTo(map);

// Enlazar nuestro servicio WMS de GeoServer
var departamentos = L.tileLayer.wms(
    "http://localhost:8080/geoserver/peru/wms",
    {
        layers: "pg_departamentos",
        format: "image/png",
        transparent: true
    }
).addTo(map);

// Enlazar nuestro servicio WMS de GeoServer
var rios_quebradas = L.tileLayer.wms(
    "http://localhost:8080/geoserver/peru/wms",
    {
        layers: "pg_rios_quebradas",
        format: "image/png",
        transparent: true
    }
).addTo(map);

// Enlazar nuestro servicio WMS de GeoServer
var restos_arqueologicos = L.tileLayer.wms(
    "http://localhost:8080/geoserver/peru/wms",
    {
        layers: "pg_restos_arqueologicos",
        format: "image/png",
        transparent: true
    }
).addTo(map);

// Controlador de Capas, se realiza una variable donde se colocan todos los mapas base
var baseMaps= {
                    "Open Street Map" : osm // Indicar la variable var osm                 
}
var wms = { //Colocar las etiquetas
                "Departamentos": departamentos,
                "Ríos y quebradas" : rios_quebradas,
                "Restos Arqueológicos": restos_arqueologicos

};
L.control.layers(baseMaps,wms).addTo(map); // Aquí se agrega el basemaps, se va agregando el wms

