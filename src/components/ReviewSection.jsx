// src/components/ReviewSection.js
import React from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Perfect fit and very comfortable for long office hours.",
      date: "2 days ago"
    },
    {
      name: "Aman Verma",
      rating: 4,
      comment: "Good quality fabric, slight tight at the waist.",
      date: "1 week ago"
    },
    {
      name: "Imran Khan",
      rating: 5,
      comment: "Looks premium, totally worth the price.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="review-section">
      <div className="review-header">
        <div>
          <h2>Customer Reviews</h2>
          <p>Rated 4.7 out of 5</p>
        </div>
        <div className="review-filters">
          <button>Most Recent</button>
          <button>Top Rated</button>
        </div>
      </div>

      <div className="review-list">
        {reviews.map((r, index) => (
          <div className="review-card" key={index}>
            <div className="review-card-header">
              <span className="review-name">{r.name}</span>
              <span className="review-rating">
                {"★".repeat(r.rating)}
              </span>
            </div>
            <p className="review-comment">{r.comment}</p>
            <span className="review-date">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
