import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`counter-container ${darkMode ? "dark" : ""}`}>
      <div className="counter-card">
        <div className="top-bar">
          <h1>Counter</h1>

          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <p>Increase or decrease your number</p>

        <div className="count">{count}</div>

        <div className="button-group">
          <button className="increase-btn" onClick={increaseCount}>
            Increase
          </button>

          <button className="decrease-btn" onClick={decreaseCount}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
