import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-10  bg-black bg-opacity-80 flex items-center justify-center overflow-y-scroll"
      onClick={() => navigate(-1)}
    >
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        {/* <div className="border-2 rounded-md h-96 w-80 flex items-center justify-center">
          Login Container
        </div> */}
        <button
          onClick={() => navigate(-1)}
          className="absolute -top-2 -right-10 text-4xl text-white"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
