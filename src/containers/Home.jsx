import React from 'react';
import MapContainer from "../components/MapContainer";
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/locations';

const Home = () => {
  return (
    <div className="App">
      <MapContainer />
    </div>
  )
};

export default Home;