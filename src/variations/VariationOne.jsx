// src/variations/VariationOne.js
import React from "react";
import ProductLayout from "../components/ProductLayout";
import ReviewSection from "../components/ReviewSection";
import AnalyticsSection from "../components/AnalyticsSection";
import SocialProofWidget from "../components/SocialProofWidget";

const VariationOne = () => {
  return (
    <ProductLayout>
      <SocialProofWidget />
      <div className="variation-one-sections">
        <div className="glass-card">
          <div className="soft-divider"></div>
          <AnalyticsSection />
        </div>

        <ReviewSection />
      </div>
    </ProductLayout>
  );
};

export default VariationOne;
