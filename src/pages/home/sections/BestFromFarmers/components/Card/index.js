import React from 'react';
import './card.css';

const Card = ({ image, title, subtitle, price, discount }) => {
  const renderPrice = () => {
    if (discount > 0) {
      const priceAfterDiscount = price - (price * discount) / 100;
      return (
        <div>
          <div className="price">{priceAfterDiscount.toFixed(2)} USD</div>
          <div className="price-stroke">{price.toFixed(2)}</div>
        </div>
      );
    }

    return <div className="price">{price.toFixed(2)} USD</div>;
  };

  return (
    <div className="card-product">
      <div className="product-image-wrapper">
        <img src={image} alt="product-image" />
        {discount > 0 && <span className="discount-label">-{discount}%</span>}
      </div>

      <div className="description-wrapper">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {renderPrice()}
        <div className="buy-button">Buy now</div>
      </div>
    </div>
  );
};

export default Card;
