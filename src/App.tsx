import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Paragraph from './components/Paragraph';
import Video from './components/Video';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <Paragraph />
      <Video />
    </div>
  );
}

export default App;
