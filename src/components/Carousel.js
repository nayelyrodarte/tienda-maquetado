import React from 'react';
import styled from 'styled-components';
import slideOne from '../img/slideOne.png';
import slideTwo from '../img/slideTwo.png';

const CarouselWrapper = styled.div`
  display: 'grid';
  grid-template-columns: repeat(40%, 1fr);
  height: 60vh;
  overflow: hidden;

  img {
    margin-left: -10px;
  }

  img:nth-of-type(1) {
    position: relative;
    height: inherit;
  }

  img:nth-of-type(2) {
    overflow: hidden;
    position: absolute;
    width: 65%;
    height: inherit;
  }

  @media (max-width: 768px) {
    img:nth-of-type(1) {
      z-index: 3;
      width: 105%;
    }
    img:nth-of-type(2) {
      display: none;
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
