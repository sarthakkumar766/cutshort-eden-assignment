import TitleSubtitle from "./common/TitleSubtitle";
import Input from "./common/Input";
import Button from "./common/Button";
const SecondStep = ({ nextStep, handleFormData, formData }) => {
  const getDisabledStat = () => {
    if (!formData.WorkspaceName) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <TitleSubtitle
        title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later."
      />

      <div className="input-wrapper">
        <Input
          label="Workspace Name"
          placeholder="Eden"
          type="text"
          handleFormData={handleFormData}
		  value={formData.WorkspaceName}
        />
        <Input
          label="Workspace URL"
          optional={true}
          placeholder="Example"
          type="url"
          urlHint="www.eden.com/"
          handleFormData={handleFormData}
		  value={formData.WorkspaceURL}
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

export default SecondStep;
