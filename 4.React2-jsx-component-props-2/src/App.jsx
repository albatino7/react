import React from "react";
import About from "./About.jsx";

const App = () => {
  const student = [
    { name: "atul", class: 12, sec: "a" },
    { name: "sumit", class: 12, sec: "a" },
    { name: "java", class: 12, sec: "a" },
  ];
  const BoolValue = true;

  const sumofTwoNumberIs = 45;
  const handleDelete = (id) => {
    console.log("THIS ID IS DELETED ", id);
  };
  return (
    <div>
      Atul Demond
      <br />
      <About
        studentData={student}
        sumofTwoNumberIs={sumofTwoNumberIs}
        isBoolean={BoolValue}
        idDelete={handleDelete}
      />
    </div>
  );
};

export default App;
