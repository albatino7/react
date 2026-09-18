import React, { useCallback, useMemo, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  console.log("This is App Rendering");
  const [cout, setCount] = useState(0);
  const [user, setUser] = useState({ name: "atul", id: 1 });

  //usememo function me se value reuturn karta hai or function name me save kardetahai
  const addTwoNumber = useMemo(() => {
    console.log("usememo is Rendering");
    let res = 80 + 80;
    return res;
  }, [user]);

  //usecallback function ka refrence change nahi hone deta hai jise rerendeer rukta hai
  const addtwoNumb = useCallback(() => {
    console.log("Adding two number");
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h1>Value of Count is {cout}</h1> <br />
        <h1>
          user Data is {user.name} and {user.id}
        </h1>
        <br />
        <h1>{addTwoNumber}</h1>
      </div>
      <div>
        <button onClick={() => setUser({ ...user, name: "pavan" })}>
          Change Name
        </button>
        <button onClick={() => setCount(cout + 1)}>Increase</button>
      </div>
      <h1> This Is App</h1>

      <Home user={user} addtwoNumb={addtwoNumb} />
      <About />
    </div>
  );
};

export default App;
