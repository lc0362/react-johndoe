import React from 'react';
import './Header.css';

function Header() {
    return (
<nav class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">JOHN DOE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ms-lg-auto">
        <li class="nav-item">
        <a class="nav-link" href="/">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/realisations">Réalisations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Me contacter</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 );
}




export default Header;