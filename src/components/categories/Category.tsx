import React from 'react';
import './styles.css';

const Category: React.FC = () => {
  return (
    <div className="category-container">
      <h1 className="category-title">Browse The Range</h1>
      <div className="category-cards">
        <div className="category-card">
          <img src="./assets/mask-group.svg" alt="Dining" className="category-card-image" />
          <div className="category-card-title">Dining</div>
        </div>
        <div className="category-card">
          <img src="./assets/image-living-room.svg" alt="Living" className="category-card-image" />
          <div className="category-card-title">Living</div>
        </div>
        <div className="category-card">
          <img src="./assets/mask-group-2.svg" alt="Bedroom" className="category-card-image" />
          <div className="category-card-title">Bedroom</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
