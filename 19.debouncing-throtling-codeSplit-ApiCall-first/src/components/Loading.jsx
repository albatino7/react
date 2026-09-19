import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      {/* Moving dots */}
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600"></span>

        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]"></span>

        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]"></span>
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">
        Loading products...
      </p>
    </div>
  );
};

export default Loading;
