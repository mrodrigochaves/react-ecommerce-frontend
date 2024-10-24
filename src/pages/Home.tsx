import React from 'react';
import Header from '../components/header/Header';
import BannerSection from '../components/banner/BannerSection';
import Footer from '../components/footer/Footer';
import InfoSection from '../components/info/InfoSection';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
