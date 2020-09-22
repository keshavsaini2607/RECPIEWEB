import React from 'react';
import './App.css';
import Header from './Header';
import Recpies from './Recpies';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="app">
        <Header />
      <div className="app__banner">
        <div className="recpies">
        <Recpies />
        </div>
        <h1>Create your happiness with great recpies</h1>  

     </div>

<div className="contact"><ContactForm /></div>
      
    </div>
  );
}

export default App;
