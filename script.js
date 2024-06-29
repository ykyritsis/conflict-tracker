var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

var markers = [];

function loadConflicts(year) {
  fetch('conflicts.json')
    .then(response => response.json())
    .then(data => {
      var conflicts = data.find(entry => entry.year == year).conflicts;

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
          document.getElementById('info').innerHTML = `<h2>${conflict.title}</h2><p>${conflict.description}</p><p>Death Toll: ${conflict.deathToll}</p>`;
        });

        markers.push(marker);
      });
    })
    .catch(error => {
      console.error('Error loading conflicts:', error);
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

updateYear(2024);
