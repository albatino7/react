import React, { useEffect } from "react";

const Home = () => {
  console.log("Home component is rendering");

  useEffect(() => {
    console.log("App coponent is MOUNT");

    return () => {
      console.log("Home component is UNMOUNT");
    };
  }, []);

  return (
    <div>
      <h1> Home Component</h1>
    </div>
  );
};

export default Home;
