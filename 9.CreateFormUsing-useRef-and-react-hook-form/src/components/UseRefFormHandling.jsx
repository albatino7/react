import React, { useRef, useState } from "react";

const UseRefFormHandling = () => {
  console.log("UseRef component is rendering.....");

  //using form for stop multiple rerendering
  const formRef = useRef({});

  //create  useState  for saving form data
  const [user, setUser] = useState([]);
  console.log(user);

  const handleSubmit = (e) => {
    //prevent default to stop form refresh
    e.preventDefault();
    console.log(formRef.current);
    //      Scrating obj
    const obj = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
    };
    // setting obj to user
    setUser([...user, obj]);
    //empty form after submiting
    formRef.current.name.value = "";
    formRef.current.email.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>This is useRef form </h1>
        <input
          //e sending refrence of whole input
          ref={(e) => (formRef.current.name = e)}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          ref={(e) => (formRef.current.email = e)}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          ref={(e) => (formRef.current.password = e)}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">sumit</button>
      </form>
    </div>
  );
};

export default UseRefFormHandling;
