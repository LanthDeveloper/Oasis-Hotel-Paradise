var centerCoordinates = L.Browser.mobile ? [10, -80] : [20, -18];

var map = L.map("map", {
  center: centerCoordinates,
  zoom: 3,
  maxZoom: 18,
  minZoom: 3,
  maxBounds: [
    [-50, -170], // Sudoeste
    [65, 170], // Noreste
  ],
  gestureHandling: true,
});

var OpenStreetMap_Mapnik = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
  }
).addTo(map);

// Agregar marcadores
var limaMarker = L.circleMarker([-12.0464, -77.0428], {
  color: "black",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var madridMarker = L.circleMarker([40.4167, -3.7038], {
  color: "black",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var romaMarker = L.circleMarker([41.9028, 12.4964], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var buenosAiresMarker = L.circleMarker([-34.6037, -58.3816], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var utahMarker = L.circleMarker([39.3209, -111.0937], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var newYorkMarker = L.circleMarker([40.7128, -74.0059], {
  color: "black",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var cartagenaMarker = L.circleMarker([10.3909, -75.4794], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var berlinMarker = L.circleMarker([52.52, 13.405], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var capeTownMarker = L.circleMarker([-33.9249, 18.4241], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var moscowMarker = L.circleMarker([55.7558, 37.6173], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var tokyoMarker = L.circleMarker([35.6762, 139.6503], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var seoulMarker = L.circleMarker([37.5665, 126.978], {
  color: "black",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var johannesburgMarker = L.circleMarker([-26.2041, 28.0473], {
  color: "black",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var nairobiMarker = L.circleMarker([-1.2864, 36.8172], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var accraMarker = L.circleMarker([5.6037, -0.187], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

var dakarMarker = L.circleMarker([14.7167, -17.4677], {
  color: "gray",
  fillOpacity: 0.5,
  radius: 15,
}).addTo(map);

// Variable para almacenar el popup actual
var currentPopup = null;

// Función para hacer zoom al marcador y abrir el popup
function zoomToMarkerAndOpenPopup(marker, zoomLevel, message, imageUrl) {
  map.setView(marker.getLatLng(), zoomLevel);
  // Crear el div con el mensaje y la imagen
  var welcomeDiv = L.DomUtil.create('div', 'welcome-div');
  welcomeDiv.innerHTML = message;
  // Crear la imagen
  var img = L.DomUtil.create('img', 'welcome-image');
  img.src = imageUrl;
  welcomeDiv.appendChild(img);
  // Crear el popup y asociarlo al marcador
  currentPopup = L.popup()
    .setContent(welcomeDiv)
    .setLatLng(marker.getLatLng());
  marker.bindPopup(currentPopup).openPopup();
}
// Agregar eventos de click a los marcadores
limaMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(limaMarker, 11, 'Hotel Lima Paradise', '/images/hotel1.jpeg');
});

madridMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(madridMarker, 11, 'Hotel Villa San Fernando', '/images/hotel1.jpeg');
});

romaMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(romaMarker, 11, 'Hotel Roma Bella Vista', '/images/hotel1.jpeg');
});

buenosAiresMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(buenosAiresMarker, 11, 'Hotel Buenos Aires Delight', '/images/hotel1.jpeg');
});

utahMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(utahMarker, 11, 'Hotel Utah Serenity', '/images/hotel1.jpeg');
});

newYorkMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(newYorkMarker, 11, 'Hotel New York Majesty', '/images/hotel1.jpeg');
});

cartagenaMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(cartagenaMarker, 11, 'Hotel Cartagena Bliss', '/images/hotel1.jpeg');
});

berlinMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(berlinMarker, 11, 'Hotel Berlin Elegance', '/images/hotel1.jpeg');
});

capeTownMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(capeTownMarker, 11, 'Hotel Cape Town Luxury', '/images/hotel1.jpeg');
});

moscowMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(moscowMarker, 11, 'Hotel Moscow Splendor', '/images/hotel1.jpeg');
});

tokyoMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(tokyoMarker, 11, 'Hotel Tokyo Tranquility', '/images/hotel1.jpeg');
});

seoulMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(seoulMarker, 11, 'Hotel Seoul Harmony', '/images/hotel1.jpeg');
});

johannesburgMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(johannesburgMarker, 11, 'Hotel Johannesburg Oasis', '/images/hotel1.jpeg');
});

nairobiMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(nairobiMarker, 11, 'Hotel Nairobi Serenade', '/images/hotel1.jpeg');
});

accraMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(accraMarker, 11, 'Hotel Accra Tranquility', '/images/hotel1.jpeg');
});

dakarMarker.on('click', function() {
  zoomToMarkerAndOpenPopup(dakarMarker, 11, 'Hotel Dakar Serenity', '/images/hotel1.jpeg');
});


// Ocultar el div de bienvenida cuando el zoom sea menor a 4
map.on('zoomend', function() {
  if (map.getZoom() < 4 && currentPopup) {
    currentPopup.remove();
    currentPopup = null;
  }
});