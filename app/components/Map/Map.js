"use client"
import 'leaflet/dist/leaflet.css';
import * as countriesData from './countries_polygons.json';

import * as L from 'leaflet';

export default function Map({onCountryClick}){
    //fix for "Map already instantiated"
    if (isMapInitialized || mapContainerRef.current) {
        return;
    }

    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 90vh; background-color:#fffffc;'></div>";
    
    const map = L.map('map').setView([30, 0], 2);
    console.log("Base Map Initialised");

    const geojson = L.geoJson(countriesData, {
        style: style,
        onEachFeature: (feature, layer) => {
            layer.on('click', (e) => {
              onCountryClick(feature.properties.NAME);
              map.fitBounds(e.target.getBounds());
            });
            layer.on('mouseover', (e) => {
                var country = e.target;
                country.setStyle({
                    weight: 3,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.7
                });
                country.bringToFront();
            });
            layer.on('mouseout', (e) => {
                geojson.resetStyle(e.target);
            });
          },
    }).addTo(map);

    function style(feature) {
        return {
            fillColor: 'black',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 0.9
        };
    }

    function highlightFeature(e) {
        var layer = e.target;
    
        layer.setStyle({
            weight: 3,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    
        layer.bringToFront();
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }
    
}