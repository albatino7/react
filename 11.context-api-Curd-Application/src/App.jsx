import React, { useContext } from "react";
import { MyCurdStore } from "./context/MyCurdContext";
import Form from "./components/Form.jsx";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  let { productData, toggleData, setToggleData } = useContext(MyCurdStore);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 px-4 py-8">
        {toggleData ? (
          <div className="max-w-2xl mx-auto">
            <Form />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Users</h1>
                <p className="text-gray-500 mt-1">Manage your users easily</p>
              </div>

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                {productData.length} Users
              </span>
            </div>

            {/* Cards */}
            {productData.length > 0 ? (
              <div className="flex flex-wrap gap-6">
                {productData.map((value) => {
                  return <Cards key={value.id} product={value} />;
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  No users yet
                </h2>

                <p className="text-gray-500 mt-2">
                  Create your first user to get started.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
