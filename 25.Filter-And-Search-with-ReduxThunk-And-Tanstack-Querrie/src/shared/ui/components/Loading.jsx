import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-[#f5f7fa]">
      <div className="flex flex-col items-center">
        {/* Website Name */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Shop<span className="text-[#2874f0]">Kart</span>
        </h1>

        {/* Loading Dots */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#2874f0] [animation-delay:-0.3s]" />

          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#2874f0] [animation-delay:-0.15s]" />

          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#2874f0]" />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-sm text-gray-400">Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
