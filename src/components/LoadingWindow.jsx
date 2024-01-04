import React from "react";

function LoadingWindow() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-gray-400 z-10 fixed top-0 right-0 ">
        <div>
          <div className="border-8 border-t-8 border-solid rounded-full w-32 h-32 animate-spin border-s-gray-200 border-blue-500"></div>
          <span className="font-bold text-3xl mt-6">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default LoadingWindow;
