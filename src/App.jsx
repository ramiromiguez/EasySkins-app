import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';      
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContainer from './Components/Navbar/CartContainer'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContextProvider } from "./Context/CartContext"


const App = props => {
  return <>
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
              <Navbar/>
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryName">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <CartContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  </>
}


export default App;
 