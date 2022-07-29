import React from "react";
import TitleSubtitle from "./common/TitleSubtitle";
import Button from "./common/Button";

const FourthStep = ({nextStep, formData}) => {
  return (
    <>
      <span className="material-symbols-sharp check-styles">check</span>
      <TitleSubtitle
        title={`Congratulations, ${formData.DisplayName}!`}
        subtitle="You have completed onboarding, you can start using the Eden!"
      />
      <div className="input-wrapper">
        <Button name="Launch Eden" nextStep={nextStep} />
      </div>
    </>
  );
};

export default FourthStep;
