console.log('this is the test');
const mapboxgl = require('mapbox-gl');
const { buildMarker, iconURLs } = require('./marker');

// const marker = buildMarker('activity', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYW5lbHNvbjA4MjgiLCJhIjoiY2p4YWp5Zzg4MHc5cDNzcnp0c2R5dXhhbiJ9.Xqdu1kQikmbZuBdbRYaJuA';

// const map = new mapboxgl.Map({
//   container: 'map',
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
// });

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

console.log(iconURLs);
buildMarker('hotels', [-74.009151, 40.705086]);
buildMarker('activities', [-87.6354, 41.8885]);
