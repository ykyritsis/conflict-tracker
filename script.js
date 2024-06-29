// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Array of conflicts
var conflicts = [
  {
    location: [48.3794, 31.1656],
    title: "Ukraine-Russia Conflict",
    description: "Description of the Ukraine-Russia conflict..."
  },
  {
    location: [34.8021, 38.9968],
    title: "Syrian Civil War",
    description: "Description of the Syrian Civil War..."
  },
  // Add more conflicts as needed
];

// Add markers to the map
conflicts.forEach(conflict => {
  var marker = L.circleMarker(conflict.location, {
    color: 'red',
    radius: 8
  }).addTo(map);

  marker.bindPopup(`<b>${conflict.title}</b><br>${conflict.description}`).on('click', function(e) {
    document.getElementById('info').innerHTML = `<h2>${conflict.title}</h2><p>${conflict.description}</p>`;
  });
});
