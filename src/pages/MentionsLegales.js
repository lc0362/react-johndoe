import React from 'react';

function MentionsLegales() {
  return (
    <div className="px-3">
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
              
              {/* Icone location et adresse */}
              <div>
                <div className="d-inline">
                  <img src="/location-pin.png" alt="Icône Location" title="Location pin icons created by Pixel perfect - Flaticon" width="15" height="auto" />
                </div>
                <div className="d-inline"> 40 Rue Laure Diebold <div>69009 Lyon, France</div></div>
              </div>
              
              {/* Icone téléphone */}
              <div>
                <div className="d-inline">
                  <img src="/smartphone.png" alt="Icône Téléphone" title="Smartphone icons created by Roundicons - Flaticon" width="15" height="auto" />
                </div>
                <div className="d-inline">
                  <a href="tel:0620304050">06 20 30 40 50</a>
                </div>
              </div>
              
              {/* Icone email */}
              <div>
                <div className="d-inline">
                  <img src="/email.png" alt="Icône Email" title="Email icons created by Freepik - Flaticon" width="15" height="auto"/>
                </div>
                <div className="d-inline">
                  <a href="mailto:john.doe@gmail.com"> john.doe@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default MentionsLegales;
