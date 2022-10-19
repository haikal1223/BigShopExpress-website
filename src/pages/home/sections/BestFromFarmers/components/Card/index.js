import React from 'react';
import './card.css';

const Card = ({ image, title, subtitle, price }) => {
  return (
    <div className="card-product">
      <div className="product-image-wrapper">
        <img src={image} alt="product-image" />
      </div>

      <div className="description-wrapper">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="price">{price} USD</div>
        <div className="buy-button">Buy now</div>
      </div>
    </div>
  );
};

export default Card;
