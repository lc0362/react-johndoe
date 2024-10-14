import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState('/banner-mobile.jpg');
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setBackgroundImage('/banner-mobile.jpg'); 
    }
    else if (width < 992) {
      setBackgroundImage('/banner-tablette.jpg'); 
    }
    else {
      setBackgroundImage('/banner.jpg'); 
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div >
      
      <section 
        id="section-one"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
          color: 'white'
        }}
      >
        
        <h1>Bonjour, je suis John Doe</h1>
        <p>Développeur web full stack</p>
        <button type="button" className="btn btn-primary">En savoir plus</button>
      </section>

      
      <div className='mx-sm-5 py-2'>
      <h2>À propos</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      </div>

      <div className='mx-sm-5 py-2'>
      <h2>Titre 2</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      </div>

    </div>
  );
}

export default Home;
