const map = L.map('map').setView([20.5937, 78.9629], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

const farms = [
  { name: "GreenField Farm", lat: 28.7041, lng: 77.1025 },
  { name: "SunnyOrchard", lat: 19.0760, lng: 72.8777 },
  { name: "EarthNest", lat: 13.0827, lng: 80.2707 }
];

farms.forEach(farm => {
  L.marker([farm.lat, farm.lng]).addTo(map)
    .bindPopup(`<b>${farm.name}</b>`);
});
