import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setUserData, setToggle, handleUpdate, setHandleUpdate }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: handleUpdate || {},
  });

  const formSubmit = (data) => {
    console.log("form data:", data);

    if (handleUpdate) {
      // UPDATE
      setUserData((prev) =>
        prev.map((user) =>
          user.id === handleUpdate.id ? { ...user, ...data } : user,
        ),
      );
      setHandleUpdate((prev) => null);
    } else {
      // REGISTER
      const newUser = {
        id: uuidv4(),
        ...data,
      };

      setUserData((prev) => [...prev, newUser]);
    }

    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <div className="space-y-4">
          <input
            {...register("name", {
              required: "Name is Required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank spaces is not allwoed",
              },
            })}
            type="text"
            placeholder="username"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "please enter valid email",
              },
            })}
            type="text"
            placeholder="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("number", {
              required: "pleae enter mobile Number",
              minLength: {
                value: 10,
                message: "minimum 10 digit is required",
              },
              maxLength: {
                value: 10,
                message: "max digit is 10",
              },
            })}
            type="number"
            placeholder="number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.number && (
            <p className="text-sm text-red-500">{errors.number.message}</p>
          )}

          <input
            {...register("image", {
              required: "image url is required ",
            })}
            type="url"
            placeholder="image url"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.url && (
            <p className="text-sm text-red-500">{errors.url.message}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            {handleUpdate ? "update" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
