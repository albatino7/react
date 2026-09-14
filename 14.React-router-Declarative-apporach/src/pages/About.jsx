import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
          <p className="text-blue-400 font-semibold mb-2">React Router Notes</p>

          <h1 className="text-4xl font-bold mb-4">
            React Router in Current Industry
          </h1>

          <p className="text-gray-300 text-lg leading-7">
            React Router is commonly used in React applications to manage
            client-side navigation, nested pages, URL parameters and different
            application layouts.
          </p>
        </div>

        {/* Existing functionality */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Try Nested Routing
          </h2>

          <p className="text-gray-600 mb-5">
            Click the button to open the About Detail route inside this page.
          </p>

          <button
            onClick={() => navigate("/about/detail")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Show Me Details →
          </button>

          {/* Child route will appear here */}
          <div className="mt-6">
            <Outlet />
          </div>
        </div>

        {/* Main Concepts */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Important React Router Concepts
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Routing */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">1. Routing</h3>

              <p className="text-gray-600 leading-7">
                Routing decides which React component should be displayed for a
                particular URL.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                / → Home
                <br />
                /about → About
                <br />
                /contact → Contact
              </div>
            </div>

            {/* NavLink */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3">2. NavLink</h3>

              <p className="text-gray-600 leading-7">
                NavLink is mainly used for navigation menus. It can also detect
                whether the current route is active.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                {"<NavLink to='/about'>About</NavLink>"}
              </div>
            </div>

            {/* useNavigate */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3">3. useNavigate()</h3>

              <p className="text-gray-600 leading-7">
                useNavigate is used when navigation needs to happen from
                JavaScript code, such as after login or form submission.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                navigate("/dashboard");
              </div>
            </div>

            {/* Outlet */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3">4. Outlet</h3>

              <p className="text-gray-600 leading-7">
                Outlet displays the child route inside the parent route. It is
                very useful for layouts and nested pages.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                {"<Outlet />"}
              </div>
            </div>

            {/* Dynamic Routes */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-3">5. Dynamic Routes</h3>

              <p className="text-gray-600 leading-7">
                Dynamic routes are useful when the URL contains a changing value
                such as a user ID or product ID.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                /products/:id
                <br />
                /users/:userId
              </div>
            </div>

            {/* URL Params */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold mb-3">6. useParams()</h3>

              <p className="text-gray-600 leading-7">
                useParams is used to get dynamic values from the URL.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                const {"{ id }"} = useParams();
              </div>
            </div>

            {/* Search Params */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-3">7. Search Params</h3>

              <p className="text-gray-600 leading-7">
                Search parameters are useful for filters, search boxes, sorting
                and pagination.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                /products?category=mobile
                <br />
                /products?page=2
              </div>
            </div>

            {/* Protected Routes */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-3">8. Protected Routes</h3>

              <p className="text-gray-600 leading-7">
                Protected routes restrict pages such as dashboards or profile
                pages to authenticated users.
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg mt-4 text-sm">
                Login → Dashboard
                <br />
                Not logged in → Login
              </div>
            </div>
          </div>
        </div>

        {/* Industry Usage */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-5">
            How React Router Is Used in Real Projects
          </h2>

          <div className="space-y-4 text-gray-600 leading-7">
            <p>
              <strong className="text-slate-800">E-commerce:</strong> Product
              pages commonly use dynamic routes such as /products/123.
            </p>

            <p>
              <strong className="text-slate-800">Admin Dashboard:</strong>{" "}
              Different sections can have nested routes like /admin/users and
              /admin/orders.
            </p>

            <p>
              <strong className="text-slate-800">Authentication:</strong>{" "}
              Protected routes can prevent unauthenticated users from accessing
              private pages.
            </p>

            <p>
              <strong className="text-slate-800">Search & Filters:</strong>{" "}
              Query parameters can keep filters and pagination in the URL.
            </p>

            <p>
              <strong className="text-slate-800">Large Applications:</strong>{" "}
              Nested routing and layouts help organize many pages without
              creating duplicate UI.
            </p>
          </div>
        </div>

        {/* Interview Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-5">
            Interview Quick Notes
          </h2>

          <ul className="space-y-3 text-blue-900">
            <li>• React Router provides client-side routing for React apps.</li>
            <li>• Route maps a URL path to a component.</li>
            <li>• NavLink is useful for navigation menus.</li>
            <li>• useNavigate() performs navigation from JavaScript.</li>
            <li>• Outlet renders nested child routes.</li>
            <li>• useParams() reads dynamic URL parameters.</li>
            <li>• Search params are useful for filtering and pagination.</li>
            <li>
              • Protected routes are commonly used for authenticated pages.
            </li>
            <li>• 404 routes handle URLs that do not exist.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
