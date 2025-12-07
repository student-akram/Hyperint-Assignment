// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import VariationOne from "./variations/VariationOne";
import VariationTwo from "./variations/VariationTwo";
import VariationThree from "./variations/VariationThree";

function App() {
  // which variation is active
  const [activeVariation, setActiveVariation] = useState("minimal");

  const renderVariation = () => {
    if (activeVariation === "minimal") return <VariationOne />;
    if (activeVariation === "card") return <VariationTwo />;
    if (activeVariation === "dark") return <VariationThree />;
  };

  return (
    <div className="app">
      {/* Variation toggle bar */}
      <div className="variation-toggle">
        <button
          className={activeVariation === "minimal" ? "active" : ""}
          onClick={() => setActiveVariation("minimal")}
        >
          Minimal
        </button>
        
        <button
          className={activeVariation === "dark" ? "active" : ""}
          onClick={() => setActiveVariation("dark")}
        >
          Dark Mode
        </button>
      </div>

      {/* Actual screen below the toggle */}
      {renderVariation()}
    </div>
  );
}

export default App;
