"use client"

import Map from "./components/Map";
import Header from "./components/Header/Header.js";
import Side_Bar from "./components/Map/Modal/side_bar.js";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryName, setCountryName] = useState('');

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  };

  function handleCountryClick(name) {
    setCountryName(name);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Check if the modal-root div exists before appending
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
  }, []);

  return (
    <div>
      <Header />
      <div id='weathermap'></div>
      <Map onCountryClick={handleCountryClick}/>
      <Side_Bar isOpen={isModalOpen} onClose={toggleModal}>
        <h1>{countryName}</h1>
      </Side_Bar>
    </div>
  );
}
