import React from 'react';
import './headline.css';
import panah from 'src/assets/images/home/headline/panah.png';

const HeadlineSection = () => (
  <div className="untuk-semua-card">
    <div className="anchor">
      <div>Section Headline</div>
      <div className="untuk-panah">
        <div>Button</div>
        <img className="button-panah" alt="panah" src={panah} />
      </div>
    </div>
    <div className="d-flex justify-content-between">
      <div>
        <div className="card-wrapper">
          <div className="card-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="jdm"
              className="card-img"
            />
          </div>
          <div className="title">
            <div>Mobil JDM</div>
          </div>
          <div className="description">
            <div>590 HP</div>
          </div>
          <div className="price-section">
            <div className="price-button">
              <div className="price-tag">5$</div>
            </div>
            <div className="button-beli">Buy Now</div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-wrapper">
          <img
            src="https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="jdm"
            className="card-img"
          />
          <div className="title">
            <div>Mobil Eropa</div>
          </div>
          <div className="description">
            <div>660 HP</div>
          </div>
          <div className="price-section">
            <div className="price-button">
              <div className="price-tag">5$</div>
            </div>
            <div className="button-beli">Buy Now</div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-wrapper">
          <div className="card-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="jdm"
              className="card-img"
            />
            <span className="potongan-harga">-90%</span>
          </div>
          <div className="title">
            <div>Mobil Amerika</div>
          </div>
          <div className="description">
            <div>300 HP</div>
          </div>
          <div className="price-section">
            <div className="price-button">
              <div className="price-tag">7$</div>
              <div className="scribble-price">20$</div>
            </div>
            <div>
              <div className="button-beli">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-wrapper">
          <img
            src="https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="jdm"
            className="card-img"
          />
          <div className="title">
            <div>Mobil Listik</div>
          </div>
          <div className="description">
            <div>700 HP</div>
          </div>
          <div className="price-section">
            <div className="price-button">
              <div className="price-tag">5$</div>
            </div>
            <div className="button-beli">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeadlineSection;
