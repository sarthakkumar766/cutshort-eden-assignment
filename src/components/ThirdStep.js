import TitleSubtitle from "./common/TitleSubtitle";
import Button from "./common/Button";
import PlanSelector from "./common/PlanSelector";

const ThirdStep = ({ nextStep, handleFormData, team }) => {

  return (
    <>
      <div className="special-team-container">
        <TitleSubtitle
          title="How are you planning to use Eden?"
          subtitle="We'll streamline your setup experience accordingly."
        />

        <div className="input-wrapper wrapper-spacing">
          <div className="team-selector">
            <PlanSelector
              heading="For myself"
              subheading="Write better. Think more clearly. Stay organized."
              svg={"person"}
              handleFormData={handleFormData}
              variant="personal"
              team={team}
            />
            <PlanSelector
              heading="With my team"
              subheading="Wikis, docs, tasks & projects, all in one place."
              svg={"groups"}
              handleFormData={handleFormData}
              variant="team"
              team={team}
            />
          </div>
          <Button nextStep={nextStep} name="Create Workspace" />
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
