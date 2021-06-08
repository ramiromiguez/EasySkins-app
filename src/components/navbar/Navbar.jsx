import React from 'react';
import CartWidget from './CartWidget';
import { LiComponents } from './LiComponents'
import './Navbar.scss'


export const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark border-bottom border-top border-white">
      <div className="container-fluid">
        <div className="brandCartDiv">
          <a className="navbar-brand" href="#">EasySkins</a>
          <CartWidget/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <LiComponents text="Presentacion"/>
            <LiComponents text="Skins"/>
            <LiComponents text="Soporte"/>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>  
  );
}

export default Navbar;
