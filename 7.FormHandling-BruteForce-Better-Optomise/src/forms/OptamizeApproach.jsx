import React, { useState } from "react";

const OptamizeApproach = () => {
  const [formData, setFormData] = useState({});

  const formHandling = (e) => {
    // const { name, vallue } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>This form is on Optomize Approach</h1>
      <input
        onChange={formHandling}
        name="name"
        type="text"
        placeholder="name"
      />

      <input
        onChange={formHandling}
        name="email"
        type="text"
        placeholder="email"
      />
      <br />
      <h3>This Your Data</h3>
      <p>Your Name is ={formData.name}</p>
      <p>Your Email is = {formData.email}</p>
    </div>
  );
};

export default OptamizeApproach;
