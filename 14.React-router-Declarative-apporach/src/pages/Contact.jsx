import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";

const Contact = () => {
  const { data } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
          <p className="text-blue-400 font-semibold mb-2">
            React Learning Notes
          </p>

          <h1 className="text-4xl font-bold mb-4">Context API</h1>

          <p className="text-gray-300 text-lg leading-7">
            Context API is used to share data between components without passing
            props manually through every level of the component tree.
          </p>
        </div>

        {/* Current Data */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Data From Context
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-gray-600 mb-2">
              Data received from <strong>MyStore</strong>:
            </p>

            <h1 className="text-3xl font-bold text-blue-600">{data}</h1>
          </div>
        </div>

        {/* What is Context API */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            What is Context API?
          </h2>

          <p className="text-gray-600 leading-7">
            Context API provides a way to share data globally between
            components. It is useful when many components need access to the
            same data.
          </p>

          <div className="bg-slate-900 text-green-400 rounded-xl p-5 mt-5 overflow-x-auto">
            <pre>
              {`Context
   ↓
Provider
   ↓
Child Components
   ↓
useContext()
   ↓
Data`}
            </pre>
          </div>
        </div>

        {/* Important Concepts */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Important Concepts
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* createContext */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                1. createContext()
              </h3>

              <p className="text-gray-600 leading-7">
                createContext creates a Context object which can hold shared
                data.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`const MyStore = createContext();`}
              </div>
            </div>

            {/* Provider */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                2. Provider
              </h3>

              <p className="text-gray-600 leading-7">
                Provider supplies data to all components inside it.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`<MyStore.Provider value={{ data }}>
  <App />
</MyStore.Provider>`}
              </div>
            </div>

            {/* useContext */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                3. useContext()
              </h3>

              <p className="text-gray-600 leading-7">
                useContext is used to consume/read the data provided by the
                Context.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`const { data } = useContext(MyStore);`}
              </div>
            </div>

            {/* Props Drilling */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                4. Props Drilling
              </h3>

              <p className="text-gray-600 leading-7">
                Props drilling happens when we pass data through multiple
                components just to reach a deeply nested component.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`App
 ↓
Parent
 ↓
Child
 ↓
GrandChild`}
              </div>
            </div>
          </div>
        </div>

        {/* Your Code Explanation */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Understanding Your Code
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                Step 1 — Import useContext
              </h3>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg">
                {`import React, { useContext } from "react";`}
              </div>

              <p className="text-gray-600 mt-3 leading-7">
                This allows your component to read values from a React Context.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                Step 2 — Import MyStore
              </h3>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg">
                {`import { MyStore } from "../context/MyStore";`}
              </div>

              <p className="text-gray-600 mt-3 leading-7">
                MyStore is the Context created in your context file.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                Step 3 — Get data
              </h3>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg">
                {`const { data } = useContext(MyStore);`}
              </div>

              <p className="text-gray-600 mt-3 leading-7">
                useContext(MyStore) gives you the value passed through
                MyStore.Provider. Since the value is an object, you are
                destructuring the <strong>data</strong> property.
              </p>
            </div>
          </div>
        </div>

        {/* Context vs Props */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Context API vs Props
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 border">Props</th>
                  <th className="p-4 border">Context</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-4 border text-gray-600">
                    Data is passed from parent to child.
                  </td>

                  <td className="p-4 border text-gray-600">
                    Data can be shared with many components.
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border text-gray-600">
                    Good for component-specific data.
                  </td>

                  <td className="p-4 border text-gray-600">
                    Good for shared/global data.
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border text-gray-600">
                    Can cause props drilling.
                  </td>

                  <td className="p-4 border text-gray-600">
                    Helps avoid props drilling.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Usage */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Where Context API Is Used
          </h2>

          <ul className="space-y-3 text-blue-900">
            <li>• Authentication/user information</li>
            <li>• Dark mode / light mode</li>
            <li>• Language settings</li>
            <li>• Shopping cart state</li>
            <li>• Application-wide settings</li>
            <li>• Theme configuration</li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-3">
            Important Interview Point
          </h2>

          <p className="text-yellow-900 leading-7">
            Context API is useful for sharing data, but it is not a replacement
            for every state-management solution. For larger applications with
            complex state logic, libraries such as Redux Toolkit or Zustand may
            be preferred.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
