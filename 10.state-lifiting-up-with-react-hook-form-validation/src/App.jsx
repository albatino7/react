import React, { useState } from "react";
import Form from "./components/Form.jsx";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState([]);
  const [handleUpdate, setHandleUpdate] = useState(null);
  console.log(handleUpdate);
  console.log(userData);
  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      <Navbar setToggle={setToggle} />{" "}
      <div className="px-4 py-8 sm:px-6 lg:px-10">
        {" "}
        {toggle ? (
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
            {" "}
            {userData.map((data) => {
              return (
                <Cards
                  key={data.id}
                  data={data}
                  setHandleUpdate={setHandleUpdate}
                  setToggle={setToggle}
                  setUserData={setUserData}
                />
              );
            })}{" "}
          </div>
        ) : (
          <div className="flex min-h-[80vh] items-center justify-center">
            {" "}
            <Form
              setUserData={setUserData}
              setToggle={setToggle}
              handleUpdate={handleUpdate}
              toggle={toggle}
              setHandleUpdate={setHandleUpdate}
            />{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default App;
