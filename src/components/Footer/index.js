import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <div className="row">
          <div className="col-3 footer-menu">
            <div className="title">Get in touch</div>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Blog</p>
          </div>
          <div className="col-3 footer-menu">
            <h3 className="title">Connections</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Linkedln</p>
          </div>
          <div className="col-3 footer-menu">
            <h3 className="title">Earnings</h3>
            <p>Become an Affiliate</p>
            <p>Advertise your product</p>
            <p>Sell on Market</p>
          </div>
          <div className="col-3 footer-menu">
            <h3 className="title">Account</h3>
            <p>Your account</p>
            <p>Returns Centre</p>
            <p>100% purchase protection</p>
            <p>Chat with us</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      {/* Product Tags */}
      <div>
        <h3 className="title-product">Product tags</h3>
      </div>
      <div className="chip">
        <p>Beans</p>
        <p>Carrots</p>
        <p>Apples</p>
        <p>Garlic</p>
        <p>Mushrooms</p>
        <p>Tomatoes</p>
        <p>Chili pepper</p>
        <p>Brocoli</p>
        <p>Watermelon</p>
        <p>Oranges</p>
        <p>Bananas</p>
        <p>Grapes</p>
        <p>Cherries</p>
        <p>Meat</p>
        <p>Seo tag</p>
        <p>Fish</p>
        <p>Seo tag</p>
        <p>Fresh food</p>
        <p>Lemons</p>
      </div>
      <div>
        <h3 className="text">Copyright &copy; 2022 pijayanjay.com</h3>
      </div>
    </footer>
  );
};

export default Footer;
