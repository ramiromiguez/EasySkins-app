import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from '../components/navbar/Navbar'     
import ItemListContainer from '../components/itemlistcontainer/ItemListContainer';        
import ItemDetailContainer from '../components/itemdetailcontainer/ItemDetailContainer';

const Rout =  () => {
    return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
                <ItemListContainer/>
            </Route>
            <Route exact path="/item/:itemId">
                <ItemDetailContainer/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Rout
