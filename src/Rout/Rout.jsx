import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from '../Components/Navbar/Navbar'     
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';        
import ItemDetailContainer from '../components/itemdetailcontainer/ItemDetailContainer';

const Route =  () => {
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

export default Route
