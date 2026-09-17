import React from "react";
import { ShoppingBag, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
        <div className="max-w-3xl">
          <p className="text-indigo-200 font-medium mb-2">Welcome to My App</p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Manage your products and users
            <span className="text-indigo-200"> easily.</span>
          </h1>

          <p className="mt-4 text-indigo-100 text-base md:text-lg max-w-2xl">
            Explore products, manage users and keep everything organized from
            one simple dashboard.
          </p>

          <button
            onClick={() => navigate("/main/product")}
            className="mt-7 inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition shadow-md"
          >
            Explore Products
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Products */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-1 transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
              <ShoppingBag size={25} />
            </div>

            <span className="text-sm text-green-600 font-semibold">
              Available
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-5">Products</h2>

          <p className="text-slate-500 mt-1">Browse all available products</p>
        </div>

        {/* Users */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-1 transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <Users size={25} />
            </div>

            <span className="text-sm text-green-600 font-semibold">Active</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-5">Users</h2>

          <p className="text-slate-500 mt-1">View registered users</p>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-1 transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <TrendingUp size={25} />
            </div>

            <span className="text-sm text-indigo-600 font-semibold">
              Dashboard
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-5">Overview</h2>

          <p className="text-slate-500 mt-1">Everything in one place</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Get started</h2>

        <p className="text-slate-500 mt-2">
          Use the sidebar to navigate through your products and users.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => navigate("/main/product")}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            View Products
          </button>

          <button
            onClick={() => navigate("/main/user")}
            className="px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition"
          >
            View Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
