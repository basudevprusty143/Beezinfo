import React from 'react';
import './App.css'; // Optional: add your custom styles
import BeezinfoNavbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionButtons from './components/ActionButtons';
import Listings from './components/Listings';

const App = () => {
  return (
    <div>
      <BeezinfoNavbar />
      <Hero />
      <Services />
      {/* Action Buttons Section */}
      <ActionButtons />

      {/* Listings Section */}
      <Listings />
    </div>
  );
};

export default App;
