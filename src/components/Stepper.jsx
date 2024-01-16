// Stepper.js
import React, { useState } from "react";

const Stepper = ({ children, steps, currentStep, onStepChange }) => {
  // State to track the current step
  //   const [currentStep, setCurrentStep] = useState(activeStep || 0);

  // Function to handle the next step
  const handleNext = () => {
    onStepChange(currentStep + 1);
  };

  // Function to handle the previous step
  const handlePrev = () => {
    onStepChange(currentStep - 1);
  };

  return (
    <div className="mx-auto mt-8">
      {/* Display steps with connecting lines */}
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Display line between steps (except for the first step) */}
            {index !== 0 && (
              <div
                className={`w-full h-1 relative -top-3 ${
                  currentStep > index
                    ? "bg-green-500"
                    : currentStep === index
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              ></div>
            )}
            {/* Display step circle with name */}
            <div className="flex flex-col items-center">
              <span
                className={`bg-blue-600 text-white py-2 px-4 font-bold text-xl rounded-full cursor-pointer ${
                  currentStep === index
                    ? "bg-blue-500 text-white"
                    : currentStep > index
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {currentStep > index ? <span>&#10003;</span> : index + 1}
              </span>
              <span className="w-32 text-md text-center text-gray-700 font-semibold">
                {step.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="border w-full p-4 h-full mt-5">{children}</div>
      {/* Display navigation buttons */}
      <div className="mt-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`px-4 py-2 mr-4 ${
            currentStep === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          {/* {steps[currentStep-1].name} */}
          previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 ${
            currentStep === steps.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
