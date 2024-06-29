var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

var conflicts = [
  {
    year: 2024,
    location: [34.0522, -118.2437],
    title: "Conflict A",
    description: "Description of Conflict A."
  },
  {
    year: 2023,
    location: [40.7128, -74.0060],
    title: "Conflict B",
    description: "Description of Conflict B."
  }
  // Add more static conflicts here
];
var markers = [];

function loadConflicts(year) {
  var filteredConflicts = conflicts.filter(conflict => conflict.year == year);

  markers.forEach(marker => {
    map.removeLayer(marker);
  });
  markers = [];

  filteredConflicts.forEach(conflict => {
    var marker = L.circleMarker(conflict.location, {
      color: 'yellow',
      radius: 8
    }).addTo(map);

    marker.on('click', function(e) {
      document.getElementById('info').innerHTML = `<h2>${conflict.title}</h2><p>${conflict.description}</p>`;
    });

    markers.push(marker);
  });
}

function updateYear(year) {
  document.getElementById('yearLabel').innerText = `Year: ${year}`;
  loadConflicts(year);
}

document.getElementById('themeToggle').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});

loadConflicts(2024);
