import React, { } from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import NavBar from './components/Navigation/NavBar';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
