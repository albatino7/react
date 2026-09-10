import React from "react";
import BruteForce from "./forms/BruteForce.jsx";
import BetterApproach from "./forms/BetterApproach.jsx";
import OptamizeApproach from "./forms/OptamizeApproach.jsx";

const App = () => {
  return (
    <div>
      App component
      <BruteForce />
      <BetterApproach />
      <OptamizeApproach />
    </div>
  );
};

export default App;
