import React, { useState } from "react";

const BetterApproach = () => {
  const [form, setFormData] = useState({ name: "", email: "", password: "" });
  return (
    <div>
      <h1>This form is on Better Approach</h1>
      <input
        onChange={(e) => setFormData({ ...form, name: e.target.value })}
        type="text"
        placeholder="name"
      />

      <input
        onChange={(e) => setFormData({ ...form, email: e.target.value })}
        type="text"
        placeholder="email"
      />

      <input
        onChange={(e) => setFormData({ ...form, password: e.target.value })}
        type="text"
        placeholder="password"
      />
      <br />
      <h3>This Your Data</h3>
      <p>Your Name is ={form.name}</p>
      <p>Your Email is = {form.email}</p>
      <p>Your Password is = {form.password}</p>
    </div>
  );
};

export default BetterApproach;
