import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-sm px-6 text-center">
        {/* Logo */}
        <div className="mx-auto mb-6 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
          <span className="text-white text-xl font-bold">M</span>
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-white">
          Loading
          <span className="animate-pulse">...</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">Please wait a moment</p>

        {/* Progress */}
        <div className="mt-6 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-[1%] bg-indigo-500 rounded-full" />
        </div>

        {/* Percentage */}
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>Initializing</span>
          <span>1%</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
