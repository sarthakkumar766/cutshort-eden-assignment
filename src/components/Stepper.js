import React from "react";
const Stepper = ({ step, totalLength }) => {
  return (
    <>
      <div className="stepper-main-container">
        {[...Array(totalLength)].map((e, i) => (
          <React.Fragment key={i}>
            <div className={`stepper-relative-box`}>
              <div
                className={`stepper-text ${
                  step >= i + 1 ? "stepper-text-stepped" : ""
                }`}
              >
                {i + 1}
              </div>
              <div
                className={`stepper-indicator ${
                  i === 0
                    ? "stepper-indicator-first"
                    : i + 1 === totalLength
                    ? "stepper-indicator-last"
                    : ""
                } ${step >= i + 1 ? "stepper-indicator-stepped" : ""}`}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Stepper;
