import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function FooterHome() {
  return (
    <MDBFooter bgColor='none' style={{backgroundColor: "#000001", color:"white"}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <h6 style={{color:'white'}} className='text-uppercase fw-bold'>MotoPedia</h6>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{color:'white'}}>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MotoPedia
              </h6>
              <p>
                Información de motocicletas creado por entusiastas de las motos para entusiastas de las motos.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Paginas Oficiales</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Yamaha
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kawasaki
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Honda
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Suzuki
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Servicios</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Asesorate
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pregunta
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Opina
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                https://github.com/Isomorphism21
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                isomorphismay1@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +57 315256871
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        https://github.com/Isomorphism21
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterHome;