import React from "react";
import UseRefFormHandling from "./components/UseRefFormHandling.jsx";
import ReactHookForm from "./components/ReactHookForm.jsx";

const App = () => {
  console.log("App component is rendering.....");
  return (
    <div>
      <UseRefFormHandling />
      <br />
      <br />
      <ReactHookForm />
    </div>
  );
};

export default App;
