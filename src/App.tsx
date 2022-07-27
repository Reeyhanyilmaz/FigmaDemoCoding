import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Subheadings from './components/Subheadings';
import TextSection from './components/TextSection';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Banner />
      <Subheadings />
      <TextSection />
      <Video />
    </div>
  );
}

export default App;
