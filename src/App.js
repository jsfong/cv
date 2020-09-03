import React, { } from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import NavBar from './components/Navigation/NavBar'
import Skill from './components/Skill/Skill'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Skill />
      <div>Experience</div>
      <div>Contact</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
