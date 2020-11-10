import React from 'react';
import styled from 'styled-components';
import offerIcon from '../img/offer_icon.png';
import arrowDownIcon from '../img/arrow_down.png';

const MenuWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 30%) 1fr;
  align-items: center;
  background-color: #5349db;
  height: 8vh;

  div p,
  span,
  img {
    color: white;
    display: inline;
    margin: 0em 1em;
  }
  div:nth-of-type(3) {
    display: grid;
    grid-template-columns: repeat(2, 30%);
    position: absolute;
    right: 0px;
    background-color: #ee6f5e;
    height: inherit;
    width: 30%;
    align-items: center;
    justify-content: center;
  }

  img {
    position: relative;
    top: 0.2em;
    width: 1.3em;
  }
`;

function MenuBar() {
  return (
    <MenuWrapper>
      <div>
        <p>DEPARTAMENTOS</p>
        <img src={arrowDownIcon} alt='arrow down icon' />
      </div>
      <div>
        <p>MARCAS</p>
        <img src={arrowDownIcon} alt='arrow down icon' />
      </div>
      <div>
        <p>OFERTAS</p>
        <img src={offerIcon} alt='offer icon' />
      </div>
    </MenuWrapper>
  );
}

export default MenuBar;
