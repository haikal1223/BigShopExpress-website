import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

const Page = forwardRef(
  (
    { children, title = '', description = '', showFooter = true, ...other },
    ref,
  ) => {
    return (
      <div ref={ref} {...other}>
        {title && (
          <Helmet>
            <title>BSE | {title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
        )}
        <Navbar />
        <div className="container">{children}</div>
        {showFooter && <Footer />}
      </div>
    );
  },
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  showFooter: PropTypes.bool,
};

export default Page;
