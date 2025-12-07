// src/components/AnalyticsSection.js
import React from "react";
import "./AnalyticsSection.css";

const AnalyticsSection = () => {
  const stats = [
    { label: "5 star", value: 80 },
    { label: "4 star", value: 12 },
    { label: "3 star", value: 5 },
    { label: "2 star", value: 2 },
    { label: "1 star", value: 1 }
  ];

  return (
    <div className="analytics-section">
      <h2>Review Analytics</h2>
      <p className="analytics-summary">
        248 verified ratings · 4.7 average rating
      </p>

      <div className="analytics-bars">
        {stats.map((s, i) => (
          <div className="analytics-row" key={i}>
            <span className="analytics-label">{s.label}</span>
            <div className="analytics-bar-wrapper">
              <div
                className="analytics-bar-fill"
                style={{ width: `${s.value}%` }}
              />
            </div>
            <span className="analytics-value">{s.value}%</span>
          </div>
        ))}
      </div>

      <div className="analytics-extra">
        <p>312 people viewed this product today</p>
        <p>18 active carts in the last hour</p>
      </div>
    </div>
  );
};

export default AnalyticsSection;
