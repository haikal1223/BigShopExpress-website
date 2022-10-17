import React from 'react';
import Page from 'src/components/Page';
import BestFromFarmerSection from './sections/BestFromFarmers';
import BestSellingProductsSection from './sections/BestSellingProducts';
import BlogSection from './sections/Blog';
import CategoryMenuSection from './sections/CategoryMenu';
import HeadlineSection from './sections/Headline';
import OurCustomerSaySection from './sections/OurCustomerSay';

const HomePage = () => {
  return (
    <Page title="Home">
      <div>Ini Homepage</div>
      <CategoryMenuSection />
      <BestSellingProductsSection />
      <BestFromFarmerSection />
      <OurCustomerSaySection />
      <HeadlineSection />
      <BlogSection />
    </Page>
  );
};

export default HomePage;
