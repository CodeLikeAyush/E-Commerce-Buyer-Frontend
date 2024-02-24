import React, { useState } from "react";

function Modal_Static({ children }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className={`fixed inset-0 z-10 bg-black bg-opacity-80 flex items-center justify-center overflow-y-scroll ${
        showModal ? "" : "hidden"
      }`}
      onClick={() => setShowModal(!showModal)}
    >
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowModal(!showModal)}
          className="absolute -top-6 -right-12 text-6xl text-white"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal_Static;
