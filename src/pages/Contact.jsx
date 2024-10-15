import React, { useState, useEffect } from 'react';

function Contact() {


  return (
    <div>
<section 
  style={{
    backgroundImage: `url('/contact-bg.jpg')`, // Chemin vers l'image dans le dossier public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px',
    color: 'black'
  }}
>
<div className='shadow-lg bg-white rounded pb-5'>

      

      <h1 className='text-uppercase text-center pt-5'>Me contacter</h1>
      <p className='text-center '>Pour me retrouver en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      <div className='bg-primary mb-5 w-25 mx-auto' style={{ height: '5px' }}></div>
      

      <div className='py-3 px-5'>
        <h2 className=" fw-bold" id="form">Formulaire de contact</h2>
      <div className='bg-primary' style={{ height: '2px' }}></div>
      </div>
      

<div>


<form className='px-5 '>
              <div className="form-group  ">
                <label htmlFor="name">Nom</label>
                <input type='text' className="form-control" id="name" placeholder="Votre nom" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Adresse email</label>
                <input type="email" className="form-control" id="email" placeholder="Votre adresse email" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="tel">Numéro de téléphone</label>
                <input type="number" min="1" max="10" className="form-control" id="tel" placeholder="Votre numéro de téléphone" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Sujet</label>
                <input type='text' className="form-control" id="subject" placeholder="Sujet" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Envoyer</button>
            </form>


</div>


</div>
      </section>
    </div>
  );
}


export default Contact;