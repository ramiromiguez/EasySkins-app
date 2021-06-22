import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.scss'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  const knife = "knife";
  const ak = "ak";
  
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark border-bottom border-top border-white animate__animated animate__fadeInDown animate__faster">
      <div className="container-fluid">
        <div className="brandCartDiv">
          <Link className="navbar-brand" to={`/`}>EasySkins</Link>
          <CartWidget/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/category/${knife}`}> knife </Link>
             </li>
             <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/category/${ak}`}> ak </Link>
             </li>
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
