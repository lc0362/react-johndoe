import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
<nav class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top fw-semibold">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">JOHN DOE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-lg-auto">
        <li class="nav-item">
        <Link class="nav-link" to="/">Accueil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/realisations">Réalisations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Me contacter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 );
}



export default Header;