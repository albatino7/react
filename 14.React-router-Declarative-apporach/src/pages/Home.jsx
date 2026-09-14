import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-blue-400 font-semibold mb-3">
            React Learning Notes
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">React Router</h1>

          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            React Router is a library used in React applications to create
            multiple pages and handle navigation without reloading the entire
            webpage.
          </p>
        </div>

        {/* What is React Router */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            What is React Router?
          </h2>

          <p className="text-gray-600 leading-7">
            React Router allows us to create different routes for different
            components. For example, we can have a Home page, About page,
            Contact page, Login page, etc.
          </p>

          <div className="bg-slate-900 text-green-400 rounded-xl p-5 mt-5 overflow-x-auto">
            <pre>
              {`/              → Home
/about         → About
/contact       → Contact
/login         → Login`}
            </pre>
          </div>
        </div>

        {/* Important Concepts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Important React Router Concepts
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* BrowserRouter */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                1. BrowserRouter
              </h3>

              <p className="text-gray-600 leading-7">
                BrowserRouter is used to enable routing in a React application.
                It uses the browser URL to manage navigation.
              </p>
            </div>

            {/* Routes */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                2. Routes
              </h3>

              <p className="text-gray-600 leading-7">
                Routes contains all the routes of our application. It decides
                which component should be displayed for a URL.
              </p>
            </div>

            {/* Route */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                3. Route
              </h3>

              <p className="text-gray-600 leading-7">
                Route connects a URL path with a React component.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`<Route path="/about" element={<About />} />`}
              </div>
            </div>

            {/* NavLink */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                4. NavLink
              </h3>

              <p className="text-gray-600 leading-7">
                NavLink is used to create navigation links between different
                routes.
              </p>

              <div className="bg-slate-900 text-green-400 rounded-lg p-4 mt-4 text-sm">
                {`<NavLink to="/about">About</NavLink>`}
              </div>
            </div>
          </div>
        </div>

        {/* Link vs NavLink */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Link vs NavLink
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 border">Link</th>
                  <th className="p-4 border">NavLink</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-4 border text-gray-600">
                    Used for navigation
                  </td>
                  <td className="p-4 border text-gray-600">
                    Used for navigation + active styling
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border text-gray-600">
                    Does not provide active state
                  </td>
                  <td className="p-4 border text-gray-600">
                    Provides active state
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Notes</h2>

          <ul className="space-y-3 text-blue-900">
            <li>• React Router provides client-side routing.</li>
            <li>• Routes are defined using the Route component.</li>
            <li>• BrowserRouter enables routing.</li>
            <li>• NavLink is useful for navigation menus.</li>
            <li>• Link is useful for simple navigation.</li>
            <li>
              • Routing changes the displayed component without a full page
              reload.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
