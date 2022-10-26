import React from 'react';
import style from './card.module.css';

const Card = ({ image, title, subtitle, price, discount }) => {
  const renderPrice = () => {
    if (discount > 0) {
      const priceAfterDiscount = price - (price * discount) / 100;
      return (
        <div>
          <div className={style.price}>{priceAfterDiscount.toFixed(2)} USD</div>
          <div className={style.price_stroke}>{price.toFixed(2)}</div>
        </div>
      );
    }

    return <div className={style.price}>{price.toFixed(2)} USD</div>;
  };

  return (
    <div className={style.card_product}>
      <div className={style.product_image_wrapper}>
        <img src={image} alt="product-image" />
        {discount > 0 && (
          <span className={style.discount_label}>-{discount}%</span>
        )}
      </div>

      <div className={style.description_wrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subtitle}</div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {renderPrice()}
        <div className={style.buy_button}>Buy now</div>
      </div>
    </div>
  );
};

export default Card;
