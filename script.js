var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

var conflicts = [];
var markers = [];

function fetchConflicts(year) {
  fetch(`/api/fetchConflicts?year=${year}`)
    .then(response => response.json())
    .then(data => {
      conflicts = data;
      
      markers.forEach(marker => {
        map.removeLayer(marker);
      });
      markers = [];

      conflicts.forEach(conflict => {
        var marker = L.circleMarker(conflict.location, {
          color: 'yellow',
          radius: 8
        }).addTo(map);

        marker.on('click', function(e) {
          document.getElementById('info').innerHTML = `<h2>${conflict.title}</h2><p>${conflict.description}</p>`;
        });

        markers.push(marker);
      });
    });
}

function updateYear(year) {
  document.getElementById('yearLabel').innerText = `Year: ${year}`;
  fetchConflicts(year);
}

fetchConflicts(2024);
