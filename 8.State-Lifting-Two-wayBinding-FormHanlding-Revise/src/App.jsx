import React, { useState } from "react";
import RegisterUser from "./components/RegisterUser.jsx";
import Cards from "./components/Cards.jsx";

const App = () => {
  const [user, setUser] = useState([]);

  console.log(user);

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-10">
      {/* Register Form */}
      <RegisterUser setUser={setUser} user={user} />

      {/* User Cards */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-6">
        {user.map((elem, index) => (
          <Cards key={index} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
