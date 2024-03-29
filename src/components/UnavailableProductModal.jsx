import React from "react";
import Modal_Static from "../components/Modal_Static";

function ModalContent() {
  return (
    <div className=" w-11/12 m-auto md:w-[450px] border rounded-lg bg-white p-5 shadow-md">
      <h2 className="text-lg text-center font-semibold text-black mb-5 p-2 ">
        Few items are unavailable for checkout
      </h2>
      <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-100 border rounded-lg  max-h-[16rem] mb-4 p-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="border-b my-2 h-24">
            <div className="flex items-center">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/image/120/120/kpydrbk0/ayurvedic/q/l/t/chyawanprash-dabur-original-imag42hgkggh3sz4.jpeg?q=90"
                  alt=""
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-500 mx-3">
                  Dabur Chyawanprash Awaleha | 2X Immunity | Clinically Tested |
                  1 Kg
                </p>
                <span className="text-orange-300 font-semibold mx-3">
                  Only 2 available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-green-500 leading-10 ml-1">Buy remaining items?</p>
      <div className="flex justify-between">
        <button className="px-5 py-2  text-red-500  bg-transparent border rounded-sm border-red-500 hover:bg-red-500 hover:text-white transition duration-300">
          Cancel
        </button>
        <button className="px-5 py-2 text-white  bg-green-500 border rounded-sm border-green-500  hover:bg-transparent hover:text-green-500 transition duration-300">
          Buy Remaining
        </button>
      </div>
    </div>
  );
}

function UnavailableProductModal() {
  return (
    <Modal_Static>
      <ModalContent />
    </Modal_Static>
  );
}

export default UnavailableProductModal;
