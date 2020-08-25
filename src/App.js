import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import NavBar from './components/Navigation/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <div>Skill</div>
      <div>Experience</div>
      <div>Contact</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
