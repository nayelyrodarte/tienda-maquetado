import React from 'react';
import styled from 'styled-components';

import miCuentaIcon from '../img/account-1.png';
import favoritosIcon from '../img/favorites.png';
import pedidoMasivoIcon from '../img/order-1.png';
import miCarritoIcon from '../img/shopping-cart-1.png';

const ShortcutsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 40%;

  img {
    width: 3em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Shortcuts() {
  return (
    <ShortcutsWrapper>
      <img src={miCuentaIcon} alt='mi cuenta' />
      <img src={favoritosIcon} alt='mis favoritos' />
      <img src={pedidoMasivoIcon} alt='cargar pedido masivo' />
      <img src={miCarritoIcon} alt='mi carrito' />
    </ShortcutsWrapper>
  );
}

export default Shortcuts;
