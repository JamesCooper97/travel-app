import style from "./styles/Home.module.css"
import Script from "next/script"
import Link from 'next/link';
import Map from "./components/Map";
import countries from "../public/Data/countries_polygons.js";

export default function Home() {
  return (
    <>
      <head>
      </head>
    <body>
      <div id='weathermap'></div>
      <Map />
      
    </body>
    </>
  );
}
