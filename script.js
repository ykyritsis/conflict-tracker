const conflicts = [
  { id: 1, name: "Ukraine-Russia Conflict", lat: 50.4501, lon: 30.5234, severity: "high", deathToll: "14,000+", details: "Ongoing conflict since 2014, escalated in 2022 with Russia's full-scale invasion of Ukraine.", year: 2014, countries: ["ua", "ru"] },
  { id: 2, name: "Syrian Civil War", lat: 33.5138, lon: 36.2765, severity: "high", deathToll: "500,000+", details: "Multi-sided civil war ongoing since 2011, involving the Syrian government, rebel groups, and foreign powers.", year: 2011, countries: ["sy"] },
  { id: 3, name: "Yemen Crisis", lat: 15.3694, lon: 44.1910, severity: "high", deathToll: "233,000+", details: "Ongoing conflict since 2014, resulting in a severe humanitarian crisis.", year: 2014, countries: ["ye"] },
  { id: 4, name: "Afghanistan Conflict", lat: 34.5553, lon: 69.2075, severity: "high", deathToll: "176,000+", details: "Long-running conflict involving the Taliban, government forces, and international interventions.", year: 2001, countries: ["af"] },
  { id: 5, name: "Ethiopian Civil Conflict", lat: 9.1450, lon: 40.4897, severity: "medium", deathToll: "50,000-100,000", details: "Conflict in the Tigray region since 2020, causing widespread displacement and humanitarian concerns.", year: 2020, countries: ["et"] },
  { id: 6, name: "Myanmar Civil War", lat: 19.7633, lon: 96.0785, severity: "medium", deathToll: "5,000+", details: "Ongoing internal conflict since the military coup in 2021.", year: 2021, countries: ["mm"] },
  { id: 7, name: "Mozambique Insurgency", lat: -18.6657, lon: 35.5296, severity: "medium", deathToll: "4,000+", details: "Islamist insurgency in Cabo Delgado province since 2017.", year: 2017, countries: ["mz"] },
  { id: 8, name: "Nigerian Conflict", lat: 9.0820, lon: 8.6753, severity: "medium", deathToll: "350,000+", details: "Ongoing conflict involving Boko Haram and other militant groups.", year: 2009, countries: ["ng"] },
  { id: 9, name: "Libyan Crisis", lat: 32.8872, lon: 13.1913, severity: "medium", deathToll: "10,000+", details: "Ongoing instability and civil war since 2011.", year: 2011, countries: ["ly"] },
  { id: 10, name: "South Sudan Conflict", lat: 4.8594, lon: 31.5713, severity: "high", deathToll: "400,000+", details: "Civil war and ethnic violence since 2013.", year: 2013, countries: ["ss"] },
  { id: 11, name: "Kashmir Conflict", lat: 34.0837, lon: 74.7973, severity: "medium", deathToll: "70,000+", details: "Long-standing territorial dispute between India and Pakistan.", year: 1947, countries: ["in", "pk"] },
  { id: 12, name: "Mexican Drug War", lat: 23.6345, lon: -102.5528, severity: "high", deathToll: "350,000+", details: "Ongoing conflict between the Mexican government and drug cartels.", year: 2006, countries: ["mx"] },
  { id: 13, name: "Israel-Palestine Conflict", lat: 31.7683, lon: 35.2137, severity: "high", deathToll: "Unknown", details: "Long-standing conflict over land and sovereignty between Israelis and Palestinians.", year: 1948, countries: ["il", "ps"] },
  { id: 14, name: "Sudan Conflict", lat: 15.5007, lon: 32.5599, severity: "high", deathToll: "Unknown", details: "Ongoing conflicts including the Darfur conflict and South Kordofan conflict.", year: 2003, countries: ["sd"] },
  { id: 15, name: "Somalia Conflict", lat: 2.0469, lon: 45.3182, severity: "high", deathToll: "Unknown", details: "Ongoing conflict involving Al-Shabaab and government forces.", year: 2009, countries: ["so"] }
];

const map = L.map('map', {
  center: [20, 0],
  zoom: 3,
  minZoom: 2,
  maxBounds: [
      [-90, -180],
      [90, 180]
  ]
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap contributors © CARTO'
}).addTo(map);

const markers = L.markerClusterGroup();

conflicts.forEach(conflict => {
  const marker = L.circleMarker([conflict.lat, conflict.lon], {
      radius: 8,
      fillColor: getColor(conflict.severity),
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
  });

  marker.bindPopup(createPopupContent(conflict));
  markers.addLayer(marker);
});

map.addLayer(markers);

function getColor(severity) {
  switch(severity) {
      case 'high': return '#ff4136';
      case 'medium': return '#ff851b';
      case 'low': return '#ffdc00';
      default: return '#ffffff';
  }
}

function createPopupContent(conflict) {
  return `
      <div class="info-box">
          <h2>${conflict.name}</h2>
          <p><strong>Location:</strong> ${conflict.lat.toFixed(2)}°N, ${conflict.lon.toFixed(2)}°E</p>
          <p><strong>Severity:</strong> <span class="${getSeverityClass(conflict.severity)}">${conflict.severity}</span></p>
          <p><strong>Estimated Death Toll:</strong> ${conflict.deathToll}</p>
          <p><strong>Start Year:</strong> ${conflict.year}</p>
          <p><strong>Countries:</strong> ${getCountryFlags(conflict.countries)}</p>
          <h3>Details:</h3>
          <p>${conflict.details}</p>
      </div>
  `;
}

function getSeverityClass(severity) {
  switch(severity) {
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      case 'low': return 'severity-low';
      default: return '';
  }
}

function getCountryFlags(countries) {
  return countries.map(country => `<img class="flag" src="https://flagcdn.com/h20/${country}.png" alt="${country} flag">`).join(' ');
}
