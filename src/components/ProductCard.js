import React from 'react';
import styled from 'styled-components';
import cardCartIcon from '../img/shopping-cart-2.png';
import favoriteBorderIcon from '../img/favorite_border.png';
import productPlaceholder from '../img/product-placeholder.jpg';

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(60%, 20%, 20%);
  border-radius: 20px;
  border: 1px solid lightgray;
  width: inherit;
  height: fit-content;
  padding: 0.5em;
  position: relative;

  h3 {
    font-size: 0.8em;
    margin: 1em;
  }

  p,
  span {
    font-size: 0.8em;
    color: #004d9c;
    text-align: center;
    margin: auto;
  }

  span {
    margin: 1em;
  }

  img,
  .cartIcon {
    width: 1em;
  }

  img:nth-of-type(1) {
    width: 50%;
    margin: auto;
    margin-top: 1.5em;
  }

  .favoriteIcon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

function ProductCard() {
  return (
    <CardWrapper>
      <img src={productPlaceholder} alt='product' />
      <h3>Item name</h3>
      <div>
        <span>$000.00</span>
        <span>Agregar al carrito</span>
      </div>
      <img
        className='favoriteIcon'
        src={favoriteBorderIcon}
        alt='favorite icon'
      />
    </CardWrapper>
  );
}

export default ProductCard;
