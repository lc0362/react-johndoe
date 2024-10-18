import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
<nav className="navbar navbar-dark navbar-expand-lg bg-dark fw-semibold">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">JOHN DOE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-lg-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/realisations">Réalisations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Me contacter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 );
}



export default Header;