import React from "react";

const Detail = () => {
  return (
    <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-blue-600 font-semibold mb-2">Nested Routing</p>

        <h1 className="text-3xl font-bold text-slate-800">
          Nested Routes in React Router
        </h1>

        <p className="text-gray-600 mt-3 leading-7">
          This page is a child route of the About page. It is displayed inside
          the <code className="text-blue-600">&lt;Outlet /&gt;</code>
          of the parent component.
        </p>
      </div>

      {/* Route Structure */}
      <div className="bg-slate-900 text-green-400 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre>
          {`/about
   │
   ├── About
   │
   └── /about/detail
          │
          └── Detail`}
        </pre>
      </div>

      {/* What is Nested Routing */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">
          What is Nested Routing?
        </h2>

        <p className="text-gray-600 leading-7">
          Nested routing means putting one route inside another route. The child
          route is rendered inside the parent route using the{" "}
          <code className="text-blue-600">&lt;Outlet /&gt;</code> component.
        </p>
      </div>

      {/* Outlet */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">
          How does Outlet work?
        </h2>

        <p className="text-gray-600 leading-7 mb-4">
          In your About component, you have:
        </p>

        <div className="bg-slate-900 text-green-400 rounded-lg p-4">
          {"<Outlet />"}
        </div>

        <p className="text-gray-600 leading-7 mt-4">
          When the URL becomes{" "}
          <strong className="text-slate-800">/about/detail</strong>, React
          Router renders this Detail component exactly where
          <code className="text-blue-600"> &lt;Outlet /&gt;</code> is placed.
        </p>
      </div>

      {/* Real Industry Example */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Real-World Example
        </h2>

        <p className="text-gray-600 mb-4">
          Nested routes are very common in dashboards and large applications.
        </p>

        <div className="bg-slate-900 text-green-400 rounded-lg p-5">
          <pre>
            {`/dashboard
   │
   ├── /dashboard/profile
   ├── /dashboard/settings
   ├── /dashboard/orders
   └── /dashboard/users`}
          </pre>
        </div>
      </div>

      {/* Parent Child Concept */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Remember</h2>

        <ul className="space-y-3 text-blue-900">
          <li>• Parent route contains the child routes.</li>
          <li>
            • Child route is rendered through <code>&lt;Outlet /&gt;</code>.
          </li>
          <li>• Nested routes help organize large applications.</li>
          <li>• Dashboards commonly use nested routing.</li>
          <li>
            • Your current route is <strong>/about/detail</strong>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
