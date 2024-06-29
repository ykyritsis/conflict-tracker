// script.js

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");
    const infoElement = document.getElementById("info");

    // Example conflict data (static for demonstration)
    const conflicts = [
        {
            name: "Syrian Civil War",
            description: "A complex conflict that began in 2011.",
            coordinates: { lat: 34.8021, lng: 38.9968 } // Coordinates for Syria (example)
        },
        {
            name: "Ukraine Crisis",
            description: "Conflict between Ukraine and Russia-backed separatists.",
            coordinates: { lat: 48.3794, lng: 31.1656 } // Coordinates for Ukraine (example)
        }
        // Add more conflicts as needed
    ];

    // Initialize the world map (dummy implementation)
    const initializeMap = () => {
        // Dummy implementation of adding clickable points
        conflicts.forEach(conflict => {
            const marker = document.createElement("div");
            marker.classList.add("marker");
            marker.style.top = `${conflict.coordinates.lat}%`;
            marker.style.left = `${conflict.coordinates.lng}%`;

            marker.addEventListener("click", () => {
                showConflictDetails(conflict);
            });

            mapElement.appendChild(marker);
        });
    };

    // Function to display conflict details
    const showConflictDetails = (conflict) => {
        infoElement.style.display = "block";
        document.getElementById("conflict-name").textContent = `Name: ${conflict.name}`;
        document.getElementById("conflict-description").textContent = `Description: ${conflict.description}`;
    };

    // Call initializeMap function on page load
    initializeMap();
});
