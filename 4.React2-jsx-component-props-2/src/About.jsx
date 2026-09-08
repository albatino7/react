import React from "react";

const About = ({ sumofTwoNumberIs, studentData, isBoolean, idDelete }) => {
  console.log(studentData);
  console.log(sumofTwoNumberIs);
  console.log(isBoolean);
  return (
    <div>
      <h1>Sum of 40 +5 = {sumofTwoNumberIs}</h1>
      <br />
      <br />

      <button onClick={() => idDelete(24)}>Click</button>
      <br />
      {studentData.map((data) => {
        return (
          <h1 key={data.name}>
            {data.name}--{data.class}---{data.sec}{" "}
          </h1>
        );
      })}
    </div>
  );
};

export default About;
