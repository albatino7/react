import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Website Name */}
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Shop<span className="text-[#2874f0]">Kart</span>
        </h1>

        {/* Loading Dots */}
        <div className="flex items-center gap-2 mt-5">
          <span className="w-2.5 h-2.5 bg-[#2874f0] rounded-full animate-bounce [animation-delay:-0.3s]" />

          <span className="w-2.5 h-2.5 bg-[#2874f0] rounded-full animate-bounce [animation-delay:-0.15s]" />

          <span className="w-2.5 h-2.5 bg-[#2874f0] rounded-full animate-bounce" />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-gray-400 mt-4">Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
