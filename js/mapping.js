mapboxgl.accessToken = 'pk.eyJ1IjoicnVzdmVsZCIsImEiOiJja3VrYmZ3ZHowczBiMnZwZTBrZzEyb2FrIn0.ErEUlsyYSsV3VTMNFykOEg';
const mapp = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [2.3364, 48.8609], // starting position [lng, lat]
    zoom: 15.5 // starting zoom
});

const marker1 = new mapboxgl.Marker({color: "black"})
        .setLngLat([2.3364, 48.8609])
        .addTo(mapp);

const marker2 = new mapboxgl.Marker({color: "gray"})
        .setLngLat([2.3333, 48.8602])
        .addTo(mapp);

const marker3 = new mapboxgl.Marker({color: "gray"})
        .setLngLat([2.3397, 48.8607])
        .addTo(mapp);

const marker4 = new mapboxgl.Marker({color: "gray"})
        .setLngLat([2.3330, 48.8619])
        .addTo(mapp);

const marker5 = new mapboxgl.Marker({color: "gray"})
        .setLngLat([2.3365, 48.8625])
        .addTo(mapp);