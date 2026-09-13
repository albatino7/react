import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MyCurdStore } from "../context/MyCurdContext";
import { nanoid } from "nanoid";

const Form = () => {
  const {
    setProductData,
    updatedData,
    setUpdatedData,
    toggleData,
    setToggleData,
  } = useContext(MyCurdStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: onchange,
    defaultValues: updatedData,
  });

  //   console.log(errors);
  console.log(updatedData);

  const formSubmit = (data) => {
    if (updatedData) {
      setProductData((prev) =>
        prev.map((user) => {
          return user.id === data.id ? { ...user, ...data } : user;
        }),
      );

      setUpdatedData(null);
    } else {
      const newObj = {
        id: nanoid(),
        name: data.name,
        email: data.email,
      };
      setProductData((prev) => [...prev, newObj]);
    }
    setToggleData((prev) => !prev);
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create User
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            {...register("name", {
              required: "This field is Required",
              pattern: {
                value: /^(?=.*\S).+$/,
                message: "Spaces are not Allowed",
              },
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            {...register("email", {
              required: "This email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: "Please enter a valid email",
              },
            })}
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg
                 font-semibold hover:bg-blue-700
                 active:scale-[0.98] transition duration-200"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default Form;
