import TitleSubtitle from "./common/TitleSubtitle";
import Input from "./common/Input";
import Button from "./common/Button";

const FirstStep = ({ nextStep, handleFormData, formData }) => {
  const getDisabledStat = () => {
    if (!formData.FullName || !formData.DisplayName) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <TitleSubtitle
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />

      <div className="input-wrapper">
        <Input
          handleFormData={handleFormData}
          label="Full Name"
          placeholder="Steve Jobs"
          type="text"
		  value={formData.FullName}
        />
        <Input
          handleFormData={handleFormData}
          label="Display Name"
          placeholder="Steve"
          type="text"
		  value={formData.DisplayName}
        />
        <Button
          disabled={getDisabledStat()}
          nextStep={nextStep}
          name="Create Workspace"
        />
      </div>
    </>
  );
};

export default FirstStep;
