import React from "react";

const Home = ({ user, addtwoNumb }) => {
  console.log("🔥 HOME COMPONENT RENDERED");

  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={() => addtwoNumb()}>Log Add two Number </button>
    </div>
  );
};

export default React.memo(Home, (prevProps, nextProps) => {
  //   console.log("🔍 MEMO COMPARISON");
  //   console.log("Old ID:", prevProps.user.id);
  //   console.log("New ID:", nextProps.user.id);

  return prevProps.user.id === nextProps.user.id;
});
