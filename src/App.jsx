import React from 'react';
import './App.scss';
import Navbar from './Screens/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';      
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './Screens/Cart'
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
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  </>
}


export default App;
 