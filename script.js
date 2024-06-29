// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Set up the CartoDB Dark Matter tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

// Array of conflicts with detailed information
var conflicts = [
  {
    location: [48.3794, 31.1656],
    title: "Ukraine-Russia Conflict",
    description: "The conflict between Ukraine and Russia began in 2014 following Russia's annexation of Crimea, and has involved intense fighting in eastern Ukraine's Donbas region."
  },
  {
    location: [34.8021, 38.9968],
    title: "Syrian Civil War",
    description: "The Syrian Civil War started in 2011 as part of the Arab Spring uprisings and has since become a complex conflict involving multiple factions and international powers."
  },
  {
    location: [31.7683, 35.2137],
    title: "Israel-Palestine Conflict",
    description: "The Israel-Palestine conflict is a long-standing geopolitical dispute involving issues of territory, national identity, and sovereignty, with roots tracing back to the early 20th century."
  }
  // Add more conflicts as needed
];

// Add markers to the map
conflicts.forEach(conflict => {
  var marker = L.circleMarker(conflict.location, {
    color: 'yellow',
    radius: 8
  }).addTo(map);

  marker.bindPopup(`<b>${conflict.title}</b><br>${conflict.description}`).on('click', function(e) {
    document.getElementById('info').innerHTML = `<h2>${conflict.title}</h2><p>${conflict.description}</p>`;
  });
});
