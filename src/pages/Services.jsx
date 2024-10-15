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
      <section 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          textAlign: 'center',
          color: 'white'
        }}
      >
      </section>

      <h1 className='text-uppercase text-center my-3'>Mon offre de services</h1>
      <p className='text-center '>Voici les prestations sur lesquelles je peux intervenir.</p>
      <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      <p>lorem</p>
    </div>
  );
}

export default Services;
