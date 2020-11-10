import React from 'react';
import Logo from '../img/chaman-morado.png';
import searchIcon from '../img/search-24px.png';
import searchInputIcon from '../img/search-24px.png';
import menuIcon from '../img/icons8-menu.svg';
import cartIcon from '../img/cart_icon.png';
import accountIcon from '../img/account_icon.png';
import favoritesIcon from '../img/favorites_icon.png';
import orderIcon from '../img/order_icon.png';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  background-color: white;
  z-index: 40;
  width: 100%;
  margin: auto;
  box-shadow: -2px 4px 15px -4px #000000;

  .menu__icons {
    img:nth-of-type(1),
    img:nth-of-type(3) {
      display: none;
    }
  }

  .search__input {
    position: relative;
    margin-top: 1em;

    input {
      border-top-style: hidden;
      border-right-style: hidden;
      border-left-style: hidden;
      border-bottom: 3px solid #5349db;
      padding: 0.5em;
      width: 20em;
    }

    img {
      position: absolute;
      left: 250px;
    }
  }

  .account__icons {
    width: inherit;
    align-self: end;
    img {
      width: 3.5em;
      margin: 0.5em;
    }
    img:nth-of-type(2) {
      width: 4em;
    }
    img:nth-of-type(3) {
      width: 6em;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    grid-template-columns: repeat(3, 130%);
    .menu__icons {
      display: grid;
      position: relative;
      gap: 2em;
      margin: 1em 0.5em;
      grid-template-columns: repeat(3, 1fr);
      align-content: space-between;
      justify-content: center;
      img:nth-of-type(1),
      img:nth-of-type(3) {
        display: block;
        align-self: center;
      }
    }

    .search__input,
    .account__icons {
      display: none;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className='menu__icons'>
        <img src={menuIcon} alt='menu' />
        <img src={Logo} alt='logo' />
        <img src={searchIcon} alt='search' />
      </div>
      <div className='search__input'>
        <input type='text' placeholder='Buscar producto...' />
        <img src={searchInputIcon} alt='search icon' />
      </div>
      <div className='account__icons'>
        <img src={accountIcon} alt='account' />
        <img src={favoritesIcon} alt='favorites' />
        <img src={orderIcon} alt='order' />
        <img src={cartIcon} alt='cart' />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
