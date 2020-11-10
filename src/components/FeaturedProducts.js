import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import arrowIcon from '../img/arrow_forward.png';

const ProductsWrapper = styled.div`
  .main__grid {
    align-content: center;
    margin: auto;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(2, 40vh);
    grid-gap: 1em;
  }

  h2 {
    color: #5349db;
    margin: 1em auto;
    line-height: 2em;
    width: 90vw;
    border-bottom: 2px solid lightgray;
  }

  p {
    color: #004d9c;
    text-align: right;
    margin: 1.5em 20%;
  }

  @media (max-width: 768px) {
    text-align: center;
    .main__grid {
      margin: 0 4em;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 1em;
    }
    p {
      text-align: center;
      margin: 1em;
    }
  }
`;

function featuredProducts({ title }) {
  return (
    <ProductsWrapper>
      <h2>{title}</h2>
      <div className='main__grid'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <p>
        Ver más <img style={{ width: '1.5em' }} src={arrowIcon} alt='arrow' />
      </p>
    </ProductsWrapper>
  );
}

export default featuredProducts;
