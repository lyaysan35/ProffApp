import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent/index.js';
import NavbarComponent from './NavbarComponent/index.js';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
