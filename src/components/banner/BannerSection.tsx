import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <div className="container">
      <div className="imageContainer">
        <img
          src="./assets/scandinavian-interior-mockup-wall-decal-background-1.svg"
          alt="Background"
          className="backgroundImage"
        />
      </div>
      <div className="textContainer">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;