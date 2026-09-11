import React, { useState } from "react";

const RegisterUser = ({ setUser, user }) => {
  const [formData, setFormData] = useState({});
  // const [user, setUser] = useState([]);
  // console.log(user);

  const handleCahange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, formData]);

    setFormData({ name: "", email: "", password: "", image: "" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="mt-2 text-sm text-gray-500">Register your account</p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Name
          </label>

          <input
            required
            value={formData.name}
            name="name"
            onChange={handleCahange}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email
          </label>

          <input
            required
            value={formData.email}
            name="email"
            onChange={handleCahange}
            type="text"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            required
            value={formData.password}
            name="password"
            onChange={handleCahange}
            type="text"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Image */}
        <div className="mb-7">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Image URL
          </label>

          <input
            required
            value={formData.image}
            name="image"
            onChange={handleCahange}
            type="url"
            placeholder="Enter image URL"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
