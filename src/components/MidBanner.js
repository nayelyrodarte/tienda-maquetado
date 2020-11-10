import React from 'react';
import styled from 'styled-components';
import likeIcon from '../img/like-icon.png';
import deliveryIcon from '../img/delivery-icon.png';
import returnIcon from '../img/return-icon.png';

const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #e2cac7;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: #013367;

  p:first-of-type {
    font-weight: bold;
  }

  img {
    width: 4em;
    margin: 1em auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function MidBanner() {
  return (
    <BannerWrapper>
      <div>
        <img src={deliveryIcon} alt='delivery icon' />
        <p>Envíos y devoluciones</p>
        <p>Entrega garantizada en máximo de 48 horas</p>
      </div>
      <div>
        <img src={returnIcon} alt='delivery icon' />
        <p>Garantía de devolución</p>
        <p>Clientes 100% satisfechos.</p>
      </div>
      <div>
        <img src={likeIcon} alt='return icon' />
        <p>Clientes satisfechos</p>
        <p>Ofrecemos la mejor variedad de productos.</p>
      </div>
    </BannerWrapper>
  );
}

export default MidBanner;
