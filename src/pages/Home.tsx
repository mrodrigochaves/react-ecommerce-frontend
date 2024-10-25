import React from 'react';
import Header from '../components/header/Header';
import BannerSection from '../components/banner/BannerSection';
import Footer from '../components/footer/Footer';
import InfoSection from '../components/info/InfoSection';
import Category from '../components/categories/Category';
import OurProducts from '../components/products/OurProducts';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <Category />
      <OurProducts />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
