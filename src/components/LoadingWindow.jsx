import React from "react";

function LoadingWindow() {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-gray-400 bg-opacity-50 z-10">
      <div className="border-t-8 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
}

export default LoadingWindow;
