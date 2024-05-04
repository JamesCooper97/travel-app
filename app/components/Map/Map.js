"use client"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import style from '../../styles/Home.module.css';
import Script from 'next/script';
import * as countryData from "public/Data/countries_polygons.js";

import * as L from 'leaflet';

export default function Map(){
    //fix for "Map already instantiated"
    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 600px;'></div>";
    const map = L.map('map').setView([37.8, -96], 4);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
    console.log("Base Map Initialised");
    L.geoJson(countryData.geoJson).addTo(map);
}

function addGeoJSON(){
    return(
        <script>

        </script>
    );
}