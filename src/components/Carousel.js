import React from 'react';
import styled from 'styled-components';
import slideOne from '../img/slideOne.png';
import slideTwo from '../img/slideTwo.png';
import slideDots from '../img/slide_dots.png';

const CarouselWrapper = styled.div`
  display: 'grid';
  grid-template-columns: repeat(50%, 1fr);
  height: 60vh;
  overflow: hidden;
  position: relative;

  img {
    margin-left: -10px;
  }

  img:nth-of-type(1) {
    position: relative;
    height: inherit;
    width: 50%;
  }

  img:nth-of-type(2) {
    overflow: hidden;
    position: absolute;
    width: 60%;
    height: inherit;
  }

  img:nth-of-type(3) {
    position: absolute;
    width: 4em;
    bottom: 10px;
    margin: auto;
  }

  div p {
    position: absolute;
    color: white;
    z-index: 40;
    margin: 3em 10%;
    width: 10em;
    height: 3em;
    text-align: center;
    font-size: 2em;
    border-left: 6px solid white;
  }

  @media (max-width: 768px) {
    img:nth-of-type(1) {
      z-index: 3;
      width: 102%;
    }
    img:nth-of-type(2) {
      display: none;
    }
  }
`;

function Carousel() {
  return (
    <CarouselWrapper>
      <div>
        <p>Conoce la nueva</p>
      </div>

      <img src={slideOne} alt='slide one' />
      <img src={slideTwo} alt='slide two' />
      <img src={slideDots} alt='slide dots' />
    </CarouselWrapper>
  );
}

export default Carousel;
