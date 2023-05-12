let mapOptions = {
    center:[13.0827, 80.2707],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([13.0827, 80.2707]);
marker.addTo(map);