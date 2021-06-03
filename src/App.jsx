import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import ItemListCointaner from './components/ItemListContainer'

const App = props => {
  return <>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListCointaner greeting='Holaaa'/>
    </div>
  </>;
}

export default App;
