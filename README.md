# Global Conflict Tracker

This project is a web-based application that displays ongoing global conflicts on an interactive map. The map is powered by Leaflet and uses clustering to manage multiple markers. The title fades out when a conflict marker is clicked and reappears when clicking on the map.

## Features

- Interactive map with conflict markers.
- Markers clustered for better visualization.
- Popup details for each conflict including severity, estimated death toll, start date, countries involved, and additional details.
- Country flags displayed in the popup details.
- Title fades out when a conflict marker is clicked.
- Mobile-friendly design with responsive adjustments.

## Usage

1. Clone the repository or download the source files.
2. Ensure all files (`index.html`, `styles.css`, and `script.js`) are in the same directory.
3. Open `index.html` in a web browser.

## Dependencies

- [Leaflet](https://leafletjs.com/) - For the interactive map.
- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) - For clustering map markers.

## File Structure

- `index.html` - The main HTML file containing the map and legends.
- `styles.css` - The CSS file for styling the application.
- `script.js` - The JavaScript file for handling map interactions and data.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
