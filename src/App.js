import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__banner">
        <img className="banner" src="https://wallpapershome.com/images/pages/pic_h/15366.jpg" alt="Home Banner" />
        <h1>Create your happiness with great recpies</h1>   
     </div>

    </div>
  );
}

export default App;
