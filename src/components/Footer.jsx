import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

function Footer() {
    return (
      <footer className="footer bg-light py-2 mt-5" >
        
<div className=" row px-3  mt-4  mx-md-5 mx-sm-2" >
         {/* Section 1: John Doe */}
         <div className="col-sm-6 col-lg-3">
            <p className="title fw-bold">John Doe</p>
            <address><div>40 Rue Laure Diebold</div>
            <div>69009 Lyon, France</div></address>
            <div>Téléphone : <a href="tel:0620304050" className='text-444'>06 20 30 40 50</a></div>
            {/* icones réseaux sociaux */}
            <div className="d-flex py-3">
  <Link to="/github" title="Github icons created by Idealogo Studio - Flaticon" className="px-2">
    <img src="/github-sign.png" alt="Icône GitHub" width="40" height="auto" id='icon-sm'/>
  </Link>
  <a href="https://www.x.com" title="Twitter icons created by Alfredo Creates - Flaticon"className="px-2">
    <img src="/twitter-sign.png" alt="Icône Twitter" width="40" height="auto" id='icon-sm'/>
  </a>
  <a href="https://www.linkedin.com" title="LinkedIn icons created by Alfredo Creates - Flaticon"className="px-2">
    <img src="/linkedin-sign.png" alt="Icône LinkedIn" width="40" height="auto" id='icon-sm'/>
  </a>
</div>

          </div>

          {/* Section 2: Liens utiles */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Liens utiles</p>
            <ul className="list-unstyled ">
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/" className='text-444'> Accueil</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/#about" className='text-444'> À propos</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/services" className='text-444'> Services</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/contact" className='text-444'> Me contacter</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/mentionslegales" className='text-444'> Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Section 3: Mes dernières réalisations */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Mes dernières réalisations</p>
            <ul className="list-unstyled">
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/realisations" className='text-444'> Fresh Food</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/realisations" className='text-444'> Restaurant Akira</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/realisations" className='text-444'> Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Section 4: Mes derniers articles */}
          <div className="col-sm-6 col-lg-3 py-1">
            <p className="title fw-bold">Mes derniers articles</p>
            <ul className="list-unstyled">
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/blog" className='text-444'> Coder son site en HTML/CSS</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/blog" className='text-444'> Vendre ses produits sur le web</Link></li>
              <li><span className="text-primary fw-bold">&gt;</span><Link to="/blog" className='text-444'> Se positionner sur Google</Link></li>
            </ul>
          
        </div>
        </div>
       

        <div className="bg-dark text-white text-center d-flex justify-content-center align-items-center" style={{ height: '50px' }}>
        <p className="mb-0 fw-bold"> &copy; Designed by John Doe</p>
        </div>
        
      </footer>
    );
  }




export default Footer;