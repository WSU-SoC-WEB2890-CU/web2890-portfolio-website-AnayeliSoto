import React, { useEffect, useState } from "react";
import "./Stars.css";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: Math.random() * 100 + "vh",
        duration: (Math.random() * 6 + 6).toFixed(2) + "s",
        delay: (Math.random() * 10).toFixed(2) + "s",
        tailLength: (Math.random() * 3 + 3).toFixed(2) + "em",
      }));
      setStars(starsArray);
    };

    generateStars();
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            "--fall-duration": star.duration,
            "--fall-delay": star.delay,
            "--star-tail-length": star.tailLength,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
