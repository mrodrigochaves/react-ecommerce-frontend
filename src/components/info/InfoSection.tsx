import React from 'react';

const FeaturesComponent: React.FC = () => {
  return (
    <div className="container">
      <div className="featureGroup">
        {features.map((feature, index) => (
          <div key={index} className="featureItem">
            <img src={feature.icon} alt={feature.title} className="icon" />
            <div className="textContainer">
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
    icon: './assets/trophy-1.svg',
    title: 'High Quality',
    subtitle: 'crafted from top materials',
  },
  {
    icon: './assets/guarantee.svg',
    title: 'Warranty Protection',
    subtitle: 'Over 2 years',
  },
  {
    icon: './assets/shipping.svg',
    title: 'Free Shipping',
    subtitle: 'Order over 150 $',
  },
  {
    icon: './assets/customer-support.svg',
    title: '24 / 7 Support',
    subtitle: 'Dedicated support',
  },
];

export default FeaturesComponent;