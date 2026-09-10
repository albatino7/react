import React, { useState } from "react";

const BruteForce = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  return (
    <div>
      <h1>This is form is On BruteForce Approach</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <h3>This Your Data</h3>
      <p>Your Name is = {name}</p>
      <p>Your Email is = {email}</p>
      <p>Your Password is = {password}</p>
    </div>
  );
};

export default BruteForce;
