var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

var conflicts = [
  {
    location: [31.0461, 34.8516],
    title: "Israel-Palestine Conflict",
    description: "Ongoing conflict between Israel and Palestine.",
    deathToll: "XXX,XXX"
  },
  {
    location: [48.3794, 31.1656],
    title: "Russia-Ukraine Conflict",
    description: "Conflict between Russia and Ukraine.",
    deathToll: "XXX,XXX"
  },
  {
    location: [33.2232, 43.6793],
    title: "Iraq-USA Conflict",
    description: "Conflict involving Iraq and the USA.",
    deathToll: "XXX,XXX"
  },
  {
    location: [6.5244, 3.3792],
    title: "Nigeria Boko Haram Insurgency",
    description: "Boko Haram insurgency in Nigeria.",
    deathToll: "XXX,XXX"
  },
  {
    location: [35.8617, 104.1954],
    title: "China Xinjiang Conflict",
    description: "Conflict in the Xinjiang region of China.",
    deathToll: "XXX,XXX"
  },
  {
    location: [13.4432, -15.3101],
    title: "Gambia Political Crisis",
    description: "Political crisis in Gambia.",
    deathToll: "XXX,XXX"
  },
  {
    location: [15.5527, 48.5164],
    title: "Yemen Civil War",
    description: "Civil war in Yemen.",
    deathToll: "XXX,XXX"
  },
  {
    location: [39.9042, 116.4074],
    title: "China-Hong Kong Protests",
    description: "Protests in Hong Kong.",
    deathToll: "XXX,XXX"
  },
  {
    location: [35.6895, 139.6917],
    title: "Japan North Korea Tensions",
    description: "Tensions between Japan and North Korea.",
    deathToll: "XXX,XXX"
  },
  {
    location: [30.0444, 31.2357],
    title: "Egypt Sinai Insurgency",
    description: "Insurgency in the Sinai Peninsula of Egypt.",
    deathToll: "XXX,XXX"
  }
  // Add more conflicts here
];

var markers = [];

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

document.getElementById('themeToggle').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});
