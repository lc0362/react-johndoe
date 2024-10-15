import React from 'react';

function MentionsLegales() {
  return (
    
    
    <div className="px-3">
      <h1>Mentions légales</h1>
      <div className="accordion" id="accordionExample">
        
        {/* Section 1: Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Éditeur du site
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="title fw-bold">John Doe</p>
              
              {/* Adresse */}
              <div className="d-flex">
  <div>
    <img src="/location-pin.png" alt="Icône Location" title="Location pin icons created by Pixel perfect - Flaticon" width="15" height="auto" />
  </div>
  <div className="ms-2">
    <address>
      40 Rue Laure Diebold 
      <div>69009 Lyon, France</div>
    </address>
  </div>
</div>

              
             {/* Téléphone */}
             <div className="d-flex ">
                <div>
                  <img src="/smartphone.png" alt="Icône Téléphone" title="Smartphone icons created by Roundicons - Flaticon" width="15" height="auto" />
                </div>
                <div className="ms-2">
                  <a href="tel:0620304050">06 20 30 40 50</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="d-flex">
                <div>
                  <img src="/email.png" alt="Icône Email" title="Email icons created by Freepik - Flaticon" width="15" height="auto"/>
                </div>
                <div className="ms-2">
                  <a href="mailto:john.doe@gmail.com"> john.doe@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Hébergeur */}
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">


      <p className='fw-bold'>
        Always Data
        </p>
                <p> 91 rue du Faubourg Saint-Honoré 
                  <div>75008 Paris</div>
                </p>
       {/* Lien */}
       <div className="d-flex">
                <div>
                  <img src="/world.png" alt="Icône Monde" title="Langues icônes créées par Freepik - Flaticon" width="15" height="auto"/>
                </div>
                <div className="ms-2">
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer"> www.alwaysdata.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Crédits */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className='fw-bold'>
        Crédits
        </p>
                <p> Site développé par John Doe, étudiant du CEF.</p>
                <p> Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer"> Pixabay</a>.</p>


                 </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default MentionsLegales;
