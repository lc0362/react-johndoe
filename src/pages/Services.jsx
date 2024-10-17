import React, { useState, useEffect } from 'react';
import './Services.css'; 

function Services() {
  const [backgroundImage, setBackgroundImage] = useState('/banner-mobile.jpg');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setBackgroundImage('/banner-mobile.jpg'); 
    } else if (width < 992) {
      setBackgroundImage('/banner-tablette.jpg'); 
    } else {
      setBackgroundImage('/banner.jpg'); 
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          textAlign: 'center',
          color: 'white'
        }}
      >
      </div>

      <div>
        <h1 className='text-uppercase text-center mt-5'>Mon offre de services</h1>
        <p className='text-center '>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      </div>

      <div className='text-center'>
        <div className="container">
          <div className="row">

            {/* Bloc UX Design */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0069ff" className="bi bi-display" viewBox="0 0 16 16" alt="Icône Ordinateur" title="Icône Ordinateur">
  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
</svg>

                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2'>UX Design</h2>
                <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
              </div>
            </div>

            {/* Bloc Développement Web */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc '>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0069ff" className="bi bi-file-earmark-code-fill" viewBox="0 0 16 16" alt="Icône Développement web" title="Icône Développement web">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708"/>
</svg>

                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2'>Développement Web</h2>
                <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, Javascript et <u>PHP</u>.</p>
              </div>
            </div>

            {/* Bloc Référencement */}
            <div className="col-12 col-md-4 py-2 d-flex">
              <div className='py-5 px-3 shadow-lg bg-white rounded service-bloc'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0069ff" className="bi bi-search-heart-fill" viewBox="0 0 16 16" alt="Icône Loupe de recherche" title="Icône Loupe de recherche">
  <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
</svg>

                <h2 className='text-uppercase my-3 fs-4 fs-md-3 fs-lg-2'>Référencement</h2>
                <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé <u>SEO</u>, consiste à mettre des techniques en œuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
