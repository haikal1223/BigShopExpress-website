import React from 'react';
import './style.css';
import simbol from 'src/assets/icons/chevron-right.png';

const BestSellingProductsSection = () => {
  return (
    <div className="row best-selling-wrapper">
      <div className="col-md-3">
        <div className="title-selling">Best Selling Product</div>
        <div className="subtitle-wrapper">
          <span className="subtitle-selling">Kitchen</span>
          <span className="subtitle-selling">Meat and Fish</span>
          <span className="subtitle-selling">Special Nutrion</span>
          <span className="subtitle-selling">Pharmacy</span>
          <span className="subtitle-selling">Baby</span>
        </div>
        <div className="button-selling">
          <div className="button-selling-title">More Product</div>
          <img src={simbol} alt="ada" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-selling">
          <img
            src="https://www.blogpress.id/wp-content/uploads/2020/06/Hyperx-Cloud-Alpha.jpg"
            alt="ada"
            className="card-img"
          />
          <div className="card-selling-title">Hyperx KW2</div>
          <div className="card-selling-subtitle">
            Step musuh dijamin pasti kedengeran
          </div>
          <div className="bottom-card-wrapper">
            <div className="card-price">Rp.12.000</div>
            <div className="card-selling-button">
              <div className="selling-button-text">Buy now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-selling">
          <div className="disc-wrapper">
            <img
              src="https://dl.kaskus.id/www.dailysia.com/wp-content/uploads/2020/09/mouse-unik_2.jpg?x57806"
              alt="ada"
              className="card-img"
            />
            <div className="disc">-18%</div>
          </div>

          <div className="card-selling-title">Mouse Laba Labos</div>
          <div className="card-selling-subtitle">
            Meningkatkan Aim Seperti Spiderman
          </div>
          <div className="bottom-card-wrapper">
            <div>
              <div className="card-price">Rp.14.040</div>
              <div className="card-price-disc">78.000</div>
            </div>
            <div className="card-selling-button">
              <div className="selling-button-text">Buy now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-selling">
          <div className="disc-wrapper">
            <img
              src="https://akcdn.detik.net.id/community/media/visual/2022/02/13/makan-dalam-gelas-1.jpeg?w=1080"
              alt="ada"
              className="card-img"
            />
            <div className="disc">-18%</div>
          </div>
          <div className="card-selling-title">Mie Gelas</div>
          <div className="card-selling-subtitle">Mie Dengan Kemasan Gelas</div>
          <div className="bottom-card-wrapper">
            <div>
              <div className="card-price">Rp.6.480</div>
              <div className="card-price-disc">36.000</div>
            </div>
            <div className="card-selling-button">
              <div className="selling-button-text">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProductsSection;
