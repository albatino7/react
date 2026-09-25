import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>

      <button onClick={() => navigate("/")}>Go Register</button>

      <button onClick={() => navigate("/main/about")}>Go About</button>
    </div>
  );
};

export default Home;
