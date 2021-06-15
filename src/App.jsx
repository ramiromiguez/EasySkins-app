import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import ItemListCointaner from './components/itemlistcontainer/ItemListContainer'


const App = props => {
  return <>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListCointaner greeting='Bienvenido a EasySkins' subtitle='los skins que buscas al mejor precio'/>
    </div>
  </>;
}

export default App;
 