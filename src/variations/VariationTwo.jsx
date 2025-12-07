// src/variations/VariationTwo.js
import React from "react";
import ProductLayout from "../components/ProductLayout";
import ReviewSection from "../components/ReviewSection";
import AnalyticsSection from "../components/AnalyticsSection";

const VariationTwo = () => {
  return (
    <ProductLayout>
      <div className="variation-two-layout">
        <div className="variation-two-left-card">
          <AnalyticsSection />
        </div>
        <div className="variation-two-right-card">
          <ReviewSection />
        </div>
      </div>
    </ProductLayout>
  );
};

export default VariationTwo;
