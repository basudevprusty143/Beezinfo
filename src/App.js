import React from 'react';
import './App.css'; // Optional: add your custom styles
import BeezinfoNavbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <BeezinfoNavbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
