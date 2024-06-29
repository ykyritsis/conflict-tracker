document.addEventListener('DOMContentLoaded', () => {
    const conflicts = [
        { id: 1, name: "Ukraine-Russia Conflict", lat: 50.4501, lon: 30.5234, severity: "high", deathToll: "14,000+ (Ukraine), 30,000+ (Russia)", details: "Ongoing conflict since 2014, escalated in 2022 with Russia's full-scale invasion of Ukraine. <a href='https://en.wikipedia.org/wiki/Russo-Ukrainian_War' target='_blank'>[1]</a>", year: "Feb 24, 2022", countries: ["ua", "ru"] },
        { id: 2, name: "Syrian Civil War", lat: 33.5138, lon: 36.2765, severity: "high", deathToll: "500,000+", details: "Multi-sided civil war ongoing since 2011, involving the Syrian government, rebel groups, and foreign powers. <a href='https://en.wikipedia.org/wiki/Syrian_civil_war' target='_blank'>[2]</a>", year: "Mar 15, 2011", countries: ["sy"] },
        { id: 3, name: "Yemen Crisis", lat: 15.3694, lon: 44.1910, severity: "high", deathToll: "233,000+", details: "Ongoing conflict since 2014, resulting in a severe humanitarian crisis. <a href='https://en.wikipedia.org/wiki/Yemeni_Civil_War_(2014%E2%80%93present)' target='_blank'>[3]</a>", year: "Sep 16, 2014", countries: ["ye"] },
        { id: 4, name: "Afghanistan Conflict", lat: 34.5553, lon: 69.2075, severity: "high", deathToll: "176,000+", details: "Long-running conflict involving the Taliban, government forces, and international interventions. <a href='https://en.wikipedia.org/wiki/War_in_Afghanistan_(2001%E2%80%932021)' target='_blank'>[4]</a>", year: "Oct 7, 2001", countries: ["af"] },
        { id: 5, name: "Ethiopian Civil Conflict", lat: 9.1450, lon: 40.4897, severity: "medium", deathToll: "50,000-100,000", details: "Conflict in the Tigray region since 2020, causing widespread displacement and humanitarian concerns. <a href='https://en.wikipedia.org/wiki/Tigray_War' target='_blank'>[5]</a>", year: "Nov 4, 2020", countries: ["et"] },
        { id: 6, name: "Myanmar Civil War", lat: 19.7633, lon: 96.0785, severity: "medium", deathToll: "5,000+", details: "Ongoing internal conflict since the military coup in 2021. <a href='https://en.wikipedia.org/wiki/Myanmar_civil_war' target='_blank'>[6]</a>", year: "Feb 1, 2021", countries: ["mm"] },
        { id: 7, name: "Mozambique Insurgency", lat: -18.6657, lon: 35.5296, severity: "medium", deathToll: "4,000+", details: "Islamist insurgency in Cabo Delgado province since 2017. <a href='https://en.wikipedia.org/wiki/Insurgency_in_Cabo_Delgado' target='_blank'>[7]</a>", year: "Oct 5, 2017", countries: ["mz"] },
        { id: 8, name: "Nigerian Conflict", lat: 9.0820, lon: 8.6753, severity: "medium", deathToll: "350,000+", details: "Ongoing conflict involving Boko Haram and other militant groups. <a href='https://en.wikipedia.org/wiki/Boko_Haram_insurgency' target='_blank'>[8]</a>", year: "Jul 26, 2009", countries: ["ng"] },
        { id: 9, name: "Libyan Crisis", lat: 32.8872, lon: 13.1913, severity: "medium", deathToll: "10,000+", details: "Ongoing instability and civil war since 2011. <a href='https://en.wikipedia.org/wiki/Libyan_Crisis_(2011%E2%80%93present)' target='_blank'>[9]</a>", year: "Feb 15, 2011", countries: ["ly"] },
        { id: 10, name: "South Sudan Conflict", lat: 4.8594, lon: 31.5713, severity: "high", deathToll: "400,000+", details: "Civil war and ethnic violence since 2013. <a href='https://en.wikipedia.org/wiki/South_Sudanese_Civil_War' target='_blank'>[10]</a>", year: "Dec 15, 2013", countries: ["ss"] },
        { id: 11, name: "Kashmir Conflict", lat: 34.0837, lon: 74.7973, severity: "medium", deathToll: "70,000+", details: "Long-standing territorial dispute between India and Pakistan. <a href='https://en.wikipedia.org/wiki/Kashmir_conflict' target='_blank'>[11]</a>", year: "Oct 22, 1947", countries: ["in", "pk"] },
        { id: 12, name: "Mexican Drug War", lat: 23.6345, lon: -102.5528, severity: "high", deathToll: "350,000+", details: "Ongoing conflict between the Mexican government and drug cartels. <a href='https://en.wikipedia.org/wiki/Mexican_Drug_War' target='_blank'>[12]</a>", year: "Dec 11, 2006", countries: ["mx"] },
        { id: 13, name: "Israel-Palestine Conflict", lat: 31.7683, lon: 35.2137, severity: "high", deathToll: "14,000+ (Palestine), 1,300+ (Israel)", details: "Long-standing conflict over land and sovereignty between Israelis and Palestinians. <a href='https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_conflict' target='_blank'>[13]</a>", year: "Oct 7, 2023", countries: ["il", "ps"] },
        { id: 14, name: "Sudan Conflict", lat: 15.5007, lon: 32.5599, severity: "high", deathToll: "Unknown", details: "Ongoing conflicts including the Darfur conflict and South Kordofan conflict. <a href='https://en.wikipedia.org/wiki/Sudanese_conflicts' target='_blank'>[14]</a>", year: "Feb 26, 2003", countries: ["sd"] },
        { id: 15, name: "Somalia Conflict", lat: 2.0469, lon: 45.3182, severity: "high", deathToll: "Unknown", details: "Ongoing conflict involving Al-Shabaab and government forces. <a href='https://en.wikipedia.org/wiki/War_in_Somalia_(2009%E2%80%93present)' target='_blank'>[15]</a>", year: "May 7, 2009", countries: ["so"] },
        { id: 16, name: "Colombian Conflict", lat: 4.7110, lon: -74.0721, severity: "medium", deathToll: "220,000+", details: "Ongoing armed conflict between government forces, paramilitary groups, crime syndicates, and left-wing guerrillas. <a href='https://en.wikipedia.org/wiki/Colombian_conflict' target='_blank'>[16]</a>", year: "May 27, 1964", countries: ["co"] },
        { id: 17, name: "Venezuelan Crisis", lat: 10.4806, lon: -66.9036, severity: "medium", deathToll: "Unknown", details: "Political crisis and economic collapse leading to massive displacement and human rights abuses. <a href='https://en.wikipedia.org/wiki/Crisis_in_Venezuela' target='_blank'>[17]</a>", year: "Jan 23, 2019", countries: ["ve"] },
        { id: 18, name: "Nagorno-Karabakh Conflict", lat: 39.1920, lon: 46.4050, severity: "medium", deathToll: "30,000+", details: "Territorial conflict between Armenia and Azerbaijan over the Nagorno-Karabakh region. <a href='https://en.wikipedia.org/wiki/Nagorno-Karabakh_conflict' target='_blank'>[18]</a>", year: "Feb 20, 1988", countries: ["am", "az"] },
        { id: 19, name: "Philippine Drug War", lat: 14.5995, lon: 120.9842, severity: "medium", deathToll: "30,000+", details: "Anti-drug campaign initiated by the Philippine government resulting in widespread extrajudicial killings. <a href='https://en.wikipedia.org/wiki/Philippine_drug_war' target='_blank'>[19]</a>", year: "Jul 1, 2016", countries: ["ph"] },
        { id: 20, name: "Hong Kong Protests", lat: 22.3193, lon: 114.1694, severity: "medium", deathToll: "Unknown", details: "Series of protests against the Chinese government's influence and control over Hong Kong. <a href='https://en.wikipedia.org/wiki/2019%E2%80%932020_Hong_Kong_protests' target='_blank'>[20]</a>", year: "Mar 15, 2019", countries: ["hk"] },
        { id: 21, name: "FARC Conflict", lat: 4.7110, lon: -74.0721, severity: "medium", deathToll: "220,000+", details: "Ongoing armed conflict between the government and FARC rebels in Colombia. <a href='https://en.wikipedia.org/wiki/Colombian_conflict' target='_blank'>[21]</a>", year: "1964", countries: ["co"] },
        { id: 22, name: "Peru Insurgency", lat: -12.0464, lon: -77.0428, severity: "medium", deathToll: "70,000+", details: "Conflict between government forces and the Shining Path insurgent group. <a href='https://en.wikipedia.org/wiki/Internal_conflict_in_Peru' target='_blank'>[22]</a>", year: "1980", countries: ["pe"] },
        { id: 23, name: "Brazil Drug War", lat: -22.9068, lon: -43.1729, severity: "medium", deathToll: "Unknown", details: "Ongoing conflict between drug cartels and law enforcement in major cities. <a href='https://en.wikipedia.org/wiki/Crime_in_Brazil' target='_blank'>[23]</a>", year: "1980s", countries: ["br"] }
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

        marker.bindPopup(createPopupContent(conflict)).on('click', () => {
            document.getElementById('title-overlay').classList.add('fade-out');
        });
        markers.addLayer(marker);
    });

    map.addLayer(markers);

    map.on('click', () => {
        if (!document.querySelector('.leaflet-popup')) {
            document.getElementById('title-overlay').classList.remove('fade-out');
        }
    });

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
                <p><strong>Start Date:</strong> ${conflict.year}</p>
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
});