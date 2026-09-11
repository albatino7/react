import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  console.log("ReactHookForm component is rendering.....");
  const { register, handleSubmit, reset } = useForm();

  const [user, setUsers] = useState([]);

  console.log(user);

  //handle formSubmit
  const formSubmit = (data) => {
    // console.log(data);
    // reset();
    setUsers([...user, data]);

    //after form submit form will reset to Deafault
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <h1>This is React-hook-form</h1>
        <input
          //e sending refrence of whole input
          {...register("name")}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          {...register("password")}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">sumit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
