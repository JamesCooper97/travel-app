import styles from "./page.module.css";
import Map from "./components/Map";
import Header from "./components/Header/Header.js";
import Portal from "./components/Side_Bar/Portal.js";
import React from 'react';

export default function Home() {
  return (
    <>
      <head>
      </head>
    <body className={styles.body}>
      <Header />
      <div id='weathermap' className={styles.weathermap}></div>
      <Map />
      <Portal />
    </body>
    </>
  );
}
