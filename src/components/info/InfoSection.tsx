import React from 'react';
import './styles.css';

const InfoSection: React.FC = () => {
  return (
    <div className="infoSection container">
      <div className="infoSection featureGroup">
        {features.map((feature, index) => (
          <div key={index} className="infoSection featureItem">
            <img src={feature.iconInfo} alt={feature.title} className="icon-info" />
            <div className="infoSection textContainer">
              <div className="title">{feature.title}</div>
              <div className="subtitle">{feature.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    iconInfo: './assets/trophy-1.svg',
    title: 'High Quality',
    subtitle: 'crafted from top materials',
  },
  {
    iconInfo: './assets/guarantee.svg',
    title: 'Warranty Protection',
    subtitle: 'Over 2 years',
  },
  {
    iconInfo: './assets/shipping.svg',
    title: 'Free Shipping',
    subtitle: 'Order over 150 $',
  },
  {
    iconInfo: './assets/customer-support.svg',
    title: '24 / 7 Support',
    subtitle: 'Dedicated support',
  },
];

export default InfoSection;