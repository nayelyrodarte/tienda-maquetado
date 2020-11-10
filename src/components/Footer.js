import React from 'react';
import styled from 'styled-components';
import mastercardLogo from '../img/mastercard_logo.png';

const FooterWrapper = styled.div`
  color: white;
  line-height: 1.2em;

  .main__grid {
    padding: 5em;
    background-color: #5349db;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .sub__footer {
    background-color: #ee6f5e;
    margin-top: -15px;
    padding: 1em;
    position: relative;

    a {
      color: white;
      margin-left: 1em;
    }

    .links {
      position: absolute;
      right: 10px;
      top: 1.5em;
    }
  }

  @media (max-width: 768px) {
    .main__grid {
      grid-template-columns: 1fr;
    }

    .sub__footer {
      .links {
        position: relative;
        right: 0;
        top: 0;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className='main__grid'>
        <div>
          <h4>CONTÁCTANOS</h4>
          <p>555-555-555</p>
        </div>
        <div>
          <h4>CONÓCENOS</h4>
          <p>Acerca de nosotros</p>
          <p>Nuestro equipo</p>
          <p>Nuestros servicios</p>
          <p>Responsabilidad social</p>
          <p>Atención a proveedores</p>
        </div>
        <div>
          <h4>COMPRA SEGURA</h4>
          <p>
            Aceptamos tarjetas de crédito, débito, prepago y pagos en efectivo
          </p>
          <img src={mastercardLogo} alt='mastercard logo' />
        </div>
      </div>
      <div className='sub__footer'>
        <p>© All Rights Reserved</p>
        <div className='links'>
          <a href='/'>Términos y condiciones</a>
          <a href='/'>Aviso de privacidad</a>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
