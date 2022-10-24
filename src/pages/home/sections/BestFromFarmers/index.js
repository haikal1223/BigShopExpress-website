import React from 'react';
import './bestfromfarmer.css';
import chevronRight from 'src/assets/icons/chevron-right.png';
import Card from './components/Card';

const dummyData = [
  {
    image:
      'https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg',
    title: 'Product Title 1',
    subtitle: 'Space for a small product description',
    price: 100,
    discount: 20,
  },
  {
    image:
      'https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg',
    title: 'Product Title 2',
    subtitle: 'Space for a small product description',
    price: 50,
    discount: 0,
  },
  {
    image:
      'https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg',
    title: 'Product Title 3',
    subtitle: 'Space for a small product description',
    price: 70.5,
    discount: 36,
  },
];

const sidebarMenu = ['Carrots', 'Tomatoes', 'Potatoes', 'Chicken', 'Beef'];

const BestFromFarmerSection = () => {
  return (
    <div className="row section-container">
      <div className="col-3">
        <div className="sidebar-title">Best from Farmers</div>
        <div className="sidebar-menu d-flex flex-column">
          {sidebarMenu.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>

        <div className="more-products-button d-flex align-items-center justify-content-center">
          More products
          <span>
            <img src={chevronRight} alt="arrow-icon" className="arrow-icon" />
          </span>
        </div>
      </div>
      <div className="col-9 row">
        {dummyData.map((item, idx) => {
          return (
            <div className="col-4" key={idx}>
              <Card
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                discount={item.discount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestFromFarmerSection;
