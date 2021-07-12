import React from 'react';
import CartWidget from '../Components/Navbar/CartWidget';
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { NavbarItemsCategory } from '../Components/Navbar/NavbarItemsCategory'


export const Navbar = () => {
  
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark border-bottom border-top border-white animate__animated animate__fadeInDown animate__faster">
      <div className="container-fluid">
          <div>
              <Link className="navbar-brand" to={`/`}>EasySkins</Link>
          </div>
          <div className="cartWidget">
              <CartWidget/>
          </div>
          <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarItemsCategory/>
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
