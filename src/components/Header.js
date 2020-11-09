import React from 'react';
import SearchBar from '../components/SearchBar';
import Shortcuts from '../components/Shortcuts';
import Logo from '../img/chaman-morado.png';
import searchIcon from '../img/search-24px.png';
import menuIcon from '../img/icons8-menu.svg';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  .mobileMenu {
    img:nth-of-type(1),
    img:nth-of-type(3) {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100vw;
      background-color: white;
      display: grid;
      grid-template-columns: repeat(3, 40%);
      z-index: 10;
      position: fixed;
      box-shadow: -2px 4px 15px -4px #000000;

      img:nth-of-type(1),
      img:nth-of-type(3) {
        display: block;
      }

      img {
        margin: 0.5em 1em;
        align-self: center;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className='mobileMenu'>
        <img src={menuIcon} alt='menu' />
        <img src={Logo} alt='logo' />
        <img src={searchIcon} alt='search' />
      </div>
      <Shortcuts />
      <SearchBar />
    </HeaderWrapper>
  );
}

export default Header;
