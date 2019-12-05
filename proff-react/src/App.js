import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent/index.js';
import NavbarComponent from './NavbarComponent/index.js';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
