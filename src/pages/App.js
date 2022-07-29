import { useState } from "react";
import StaticTitle from "../components/StaticTitle";
import Stepper from "../components/Stepper";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";

const stepRenderer = (step, nextStep, handleFormData, formData) => {
  switch (step) {
    case 1:
      return (
        <FirstStep
          nextStep={nextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      );
    case 2:
      return (
        <SecondStep
          nextStep={nextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      );
    case 3:
      return (
        <ThirdStep
          nextStep={nextStep}
          handleFormData={handleFormData}
          team={formData.team}
        />
      );
    case 4:
      return (
        <FourthStep
          nextStep={nextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      );
    default:
      return <FirstStep nextStep={nextStep} />;
  }
};

const App = () => {
  const totalLength = 4;
  const [step, setStep] = useState(1);
  const [formData, setFormDate] = useState({
    FullName: "",
    DisplayName: "",
    WorkspaceName: "",
    WorkspaceURL: "",
    team: "personal",
  });
  const handleFormData = (e) => {
    if (e === "personal" || e === "team") {
      setFormDate({
        ...formData,
        team: e,
      });
    } else {
      setFormDate({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const nextStep = () => {
    if (step === totalLength) setStep(1);
    else setStep(step + 1);
  };
  return (
    <>
      <div className="main-container">
        <StaticTitle />
        <Stepper step={step} totalLength={totalLength} />

        {stepRenderer(step, nextStep, handleFormData, formData)}
      </div>
    </>
  );
};

export default App;
