maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [77.23, 28.61], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// Set optionsf
const marker = new maptilersdk.Marker({
  color: "#FF0000",
  draggable: true,
})
  .setLngLat([77.23, 28.61])
  .addTo(map);
