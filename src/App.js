import React from 'react';
import Logo from './ppl-logo.png';
import Charities from './charities.json'
import './App.css';



function App() {
  const items = Charities.charities.map( (charity) => {
      return <li key={charity.charity}>{charity.type}, {charity.charity}, {charity.society}, {charity.description}</li>
  });

console.log(items)

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" />
        <h1>
          Supported Charities
        </h1>
      </header>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default App;
