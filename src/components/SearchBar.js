import React from 'react';
import styled from 'styled-components';
import searchIcon from '../img/search-24px.png';

const TextInput = styled.div`
  border-style: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

function SearchBar() {
  return (
    <TextInput>
      <input type='text' placeholder='Buscar producto...' />
      <img src={searchIcon} alt='search' />
    </TextInput>
  );
}

export default SearchBar;
