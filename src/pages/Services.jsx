import React, { useState, useEffect } from 'react';

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

<div className='text-center '>

<div className="container">
      <div className="row">

      {  /* Bloc ux design */ }
        <div className="col-12 col-md-4 py-2">
  <div className='py-5 shadow-lg bg-white rounded'>
<h2 className='text-uppercase my-1 fs-4 fs-md-3 fs-lg-2'>UX Design</h2>
<p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
</div>
</div>

{  /* Bloc développement web */ }
<div className="col-12 col-md-4 py-2">
  <div className='py-5 shadow-lg bg-white rounded '>
<h2 className='text-uppercase my-1 fs-4 fs-md-3 fs-lg-2'>Développement Web</h2>
<p>Le développement de sites web repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, Javascript et <u>PHP</u>.</p>
</div>
</div>

{  /* Bloc référencement*/ }
<div className="col-12 col-md-4 py-2">
  <div className='py-5 shadow-lg bg-white rounded'>
<h2 className='text-uppercase my-1 fs-4 fs-md-3 fs-lg-2'>Référencement</h2>
<p>Le référencement naturel d'un site, aussi appelé <u>SEO</u>, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
</div>
</div>

</div>
</div>

</div>

    </div>
  );
}

export default Services;
