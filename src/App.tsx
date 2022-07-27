import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Subheadings from './components/Subheadings';
import Paragraph from './components/Paragraph';
import CardsHeader from './components/CardsHeader';
import Video from './components/Video';
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Carousel />
      <Subheadings />
      <Header />
      <Paragraph />
      <Video />
      <CardsHeader/>
      <Cards />
    </div>
  );
}

export default App;
