"use client"
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import style from '../../styles/Home.module.css';
import Script from 'next/script';
import * as countriesData from './countries_polygons.json';

import * as L from 'leaflet';

export default function Map(){
    //fix for "Map already instantiated"
    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 600px;'></div>";
    const map = L.map('map').setView([0, 0], 2);
    //const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
    console.log("Base Map Initialised");
    //L.geoJson(countriesData).addTo(map);

    var geojson;

    geojson = L.geoJson(countriesData, {
        style: style,
        onEachFeature: onEachFeature
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