import React from 'react';
import './styles.css'

type OurProducts = {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image: string;
  bgImage: string;
};

const products: OurProducts[] = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    image: "./assets/images.svg",
    bgImage: "./assets/bg.svg"
  },
  {
    name: "Leviosa",
    description: "Rattan furniture",
    price: "Rp 2.500.000",
    image: "./assets/images-2.svg",
    bgImage: "./assets/bg-2.svg"
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "Discount",
    image: "./assets/images-3.svg",
    bgImage: "./assets/bg-4.svg"
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
    image: "./assets/images-4.svg",
    bgImage: "./assets/bg-5.svg"
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "./assets/images-5.svg",
    bgImage: "./assets/bg-6.svg"
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    badge: "New",
    image: "./assets/images-6.svg",
    bgImage: "./assets/bg-7.svg"
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: "./assets/images-7.svg",
    bgImage: "./assets/bg-8.svg"
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    badge: "New",
    image: "./assets/images-8.svg",
    bgImage: "./assets/bg-9.svg"
  }
];

const OurProducts: React.FC = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            {product.badge && (
              <div className="product-badge">{product.badge}</div>
            )}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                <span className="product-price">{product.price}</span>
                {product.oldPrice && (
                  <span className="product-old-price">{product.oldPrice}</span>
                )}
              </div>
            </div>
            <img src={product.bgImage} alt="Background" className="product-background-image" />
          </div>
        ))}
      </div>
      <button className="product-show-more">Show More</button>
    </div>
  );
};

export default OurProducts;
