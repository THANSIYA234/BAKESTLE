import React from 'react';
import './Item.css';
import { Link } from '@tanstack/react-router';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to="/product/$productId" params={{ productId: props.id }} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt='' />
      </Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>₹{props.price}</div>
      </div>
    </div>
  );
};

export default Item;
