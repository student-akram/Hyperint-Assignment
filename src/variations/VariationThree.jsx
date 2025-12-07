// src/variations/VariationThree.js
import React from "react";
import ProductLayout from "../components/ProductLayout";
import ReviewSection from "../components/ReviewSection";
import AnalyticsSection from "../components/AnalyticsSection";
import SocialProofWidget from "../components/SocialproofWidget";
import "./VariationThree.css"; 

const VariationThree = () => {
  return (
    <div className="dark-theme">
      <ProductLayout>
        <SocialProofWidget />

        <div className="variation-three-container">

          {/* Reviews first */}
          <section className="v3-section v3-reviews">
            <h2 className="v3-heading">🌙 Customer Experience</h2>
            <ReviewSection />
          </section>

          {/* Analytics second */}
          <section className="v3-section v3-analytics">
            <h2 className="v3-heading">📊 Insights & Analytics</h2>
            <AnalyticsSection />
          </section>

        </div>
      </ProductLayout>
    </div>
  );
};

export default VariationThree;
