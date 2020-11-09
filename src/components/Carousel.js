import React from 'react';
import styled from 'styled-components';
import slideOne from '../img/slideOne.png';
import slideTwo from '../img/slideTwo.png';

const CarouselWrapper = styled.div`
  display: 'grid';
  grid-template-columns: repeat(2, 1fr);
  height: 60vh;

  img:nth-of-type(1) {
    position: relative;
    width: 100%;
    height: inherit;
    top: 0;
    left: 0;
  }
  img:nth-of-type(2) {
    display: block;
    max-width: 60%;
    height: inherit;
    position: absolute;
    right: 1px;
    top: 34%;
    @media (min-width: 425px) {
      _display: none;
    }
  }


  }
`;

function Carousel() {
  return (
    <CarouselWrapper>
      <img src={slideOne} alt='slide one' />
      <img src={slideTwo} alt='slide two' />
    </CarouselWrapper>
  );
}

export default Carousel;
