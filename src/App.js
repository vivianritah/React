import React from 'react';
import logo from './flower.avif';

import './App.css';
import ShoppingList from './components/shoppingList'; // Ensure the component name matches the file name
import Tables from './components/table';
import Car from './components/cars';
import Goal from './components/goal';
import Country from './components/country';
import ApplicationForm from './components/applicationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Vivian Ritah<code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ShoppingList name="social media platforms" />
      <Tables/>
      <Car/>
      <ApplicationForm name="application form" />
      <Goal/>
      <Country name="Region"/>
    </div>
  );
}

export default App;
