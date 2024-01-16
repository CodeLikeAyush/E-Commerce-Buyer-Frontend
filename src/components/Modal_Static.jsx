import React, { useState } from "react";

function Modal_Static({ children }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className={`fixed inset-0 z-10 bg-gray-700 bg-opacity-80 flex items-center justify-center overflow-y-scroll ${
        showModal ? "" : "hidden"
      }`}
      onClick={() => setShowModal(!showModal)}
    >
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowModal(!showModal)}
          className="absolute -top-2 -right-10 text-4xl text-white"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal_Static;
