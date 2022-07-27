import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Paragraph from './components/Paragraph';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Paragraph />
    </div>
  );
}

export default App;
