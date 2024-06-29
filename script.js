var map = L.map('map', {
  minZoom: 2,
  maxZoom: 10,
  zoomControl: false,
  maxBounds: [
    [-90, -180],
    [90, 180]
  ]
}).setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 10
}).addTo(map);

var conflicts = [
  {
    location: [31.0461, 34.8516],
    title: "Israel-Palestine Conflict",
    description: "Ongoing conflict between Israel and Palestine.",
    deathToll: "30,000+"
  },
  {
    location: [48.3794, 31.1656],
    title: "Russia-Ukraine Conflict",
    description: "Conflict between Russia and Ukraine.",
    deathToll: "10,191+"
  },
  {
    location: [15.5527, 48.5164],
    title: "Yemen Civil War",
    description: "Civil war in Yemen.",
    deathToll: "20,000+"
  },
  {
    location: [12.5657, 104.9910],
    title: "Myanmar Civil Conflict",
    description: "Ongoing conflict in Myanmar.",
    deathToll: "6,000+"
  },
  {
    location: [6.5244, 3.3792],
    title: "Nigeria Boko Haram Insurgency",
    description: "Boko Haram insurgency in Nigeria.",
    deathToll: "3,500+"
  },
  {
    location: [33.2232, 43.6793],
    title: "Iraq Conflict",
    description: "Conflict involving various groups in Iraq.",
    deathToll: "4,000+"
  },
  {
    location: [35.8617, 104.1954],
    title: "China Xinjiang Conflict",
    description: "Conflict in the Xinjiang region of China.",
    deathToll: "Unknown"
  },
  {
    location: [39.9042, 116.4074],
    title: "China-Hong Kong Protests",
    description: "Protests in Hong Kong.",
    deathToll: "100+"
  },
  {
    location: [13.4432, -15.3101],
    title: "Gambia Political Crisis",
    description: "Political crisis in Gambia.",
    deathToll: "200+"
  },
  {
    location: [10.8231, 106.6297],
    title: "Vietnam Border Skirmishes",
    description: "Skirmishes along the Vietnam-China border.",
    deathToll: "150+"
  }
];

conflicts.forEach(conflict => {
  var marker = L.circleMarker(conflict.location, {
    color: 'yellow',
    radius: 8
  }).addTo(map);

  marker.on('click', function(e) {
    document.getElementById('info').innerHTML = `
      <h2>${conflict.title}</h2>
      <p>${conflict.description}</p>
      <p>Death Toll: ${conflict.deathToll}</p>
    `;
    document.getElementById('info').classList.add('show');
  });
});

map.on('click', function() {
  document.getElementById('info').classList.remove('show');
});
