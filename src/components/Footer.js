import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer className=" bg-light" >
        
<div className=" row px-3 py-3 pt-5 mt-5 mx-md-5 mx-sm-2" >
         {/* Section 1: John Doe */}
         <div className="col-sm-6 col-lg-3">
            <p className="title fw-bold">John Doe</p>
            <address><div>40 Rue Laure Diebold</div>
            <div>69009 Lyon, France</div></address>
            <div>Téléphone : <a href="tel:0620304050" className="text-decoration-none text-black">06 20 30 40 50</a></div>
            {/* icones réseaux sociaux */}
            <div className="d-flex py-3">
  <a href="https://www.github.com" title="Github icons created by Idealogo Studio - Flaticon" className="px-2">
    <img src="/github-sign.png" alt="Icône GitHub" width="50" height="50" />
  </a>
  <a href="https://www.x.com" title="Twitter icons created by Alfredo Creates - Flaticon"className="px-2">
    <img src="/twitter-sign.png" alt="Icône Twitter" width="50" height="50" />
  </a>
  <a href="https://www.linkedin.com" title="LinkedIn icons created by Alfredo Creates - Flaticon"className="px-2">
    <img src="/linkedin-sign.png" alt="Icône LinkedIn" width="50" height="50" />
  </a>
</div>

          </div>

          {/* Section 2: Liens utiles */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Liens utiles</p>
            <ul className="list-unstyled ">
              <li><a href="/" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Accueil</a></li>
              <li><a href="/" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> À propos</a></li>
              <li><a href="/services" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Services</a></li>
              <li><a href="/contact" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Me contacter</a></li>
              <li><a href="/mentionslegales" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Mentions Légales</a></li>
            </ul>
          </div>

          {/* Section 3: Mes dernières réalisations */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Mes dernières réalisations</p>
            <ul className="list-unstyled">
              <li><a href="/realisations" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Fresh Food</a></li>
              <li><a href="/realisations" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Restaurant Akira</a></li>
              <li><a href="/realisations" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Espace bien-être</a></li>
            </ul>
          </div>

          {/* Section 4: Mes derniers articles */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Mes derniers articles</p>
            <ul className="list-unstyled">
              <li><a href="/blog" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Coder son site en HTML/CSS</a></li>
              <li><a href="/blog" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Vendre ses produits sur le web</a></li>
              <li><a href="/blog" className="text-decoration-none text-black"><span className="text-primary fw-bold">&gt;</span> Se positionner sur Google</a></li>
            </ul>
          
        </div>
        </div>
       

        <div className="bg-dark text-white text-center d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
        <p className="mb-0 fw-bold"> &copy; Designed by John Doe</p>
        </div>
        
      </footer>
    );
  }




export default Footer;