// src/components/ProductLayout.js
import React from "react";
import "./ProductLayout.css";

const ProductLayout = ({ children }) => {
  return (
    <div className="product-page">
      <header className="product-header">
        <div className="logo">DMD Clothing</div>
        <nav className="nav-links">
          <span>Men</span>
          <span>Women</span>
          <span>Formal</span>
          <span>Casual</span>
        </nav>
      </header>

      <main className="product-main">
        <img src="/product1.jpg" alt="Product" className="product-img" />


        <div className="product-details-section">
          <h1 className="product-title">
            Lycra Cotton Stretchable Plain Formal Trousers
          </h1>
          <p className="product-price">₹1,299</p>

          <div className="product-meta">
            <p>Color: Charcoal Black</p>
            <p>Fit: Polo Fit</p>
          </div>

          <div className="product-size">
            <p>Size</p>
            <div className="size-options">
              <button>30</button>
              <button>32</button>
              <button>34</button>
              <button>36</button>
              <button>38</button>
            </div>
          </div>

          <button className="add-to-cart-btn">
            Add to Cart
          </button>

          <div className="product-description">
            <h3>Description</h3>
            <p>
              Premium lycra-cotton stretchable formal trousers for men,
              ideal for office and business wear. Comfortable, breathable
              and wrinkle resistant.
            </p>
          </div>
        </div>
      </main>

      {/* Place for extra sections like reviews / analytics */}
      <section className="product-extra">
        {children}
      </section>
    </div>
  );
};

export default ProductLayout;
