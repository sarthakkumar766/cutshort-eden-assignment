const PlanSelector = ({
  svg,
  heading,
  subheading,
  handleFormData,
  variant,
  team,
}) => {
  const getSvgClass = () => {
    if (team === "personal" && variant === "personal") return "icon-focussed";
    else if (team === "team" && variant === "team") return "icon-focussed";
    else return "";
  };
  return (
    <>
      <div
        className={`myself ${
          team === "personal" && variant === "personal"
            ? "personal-class"
            : team === "team" && variant === "team"
            ? "team-class"
            : ""
        }`}
        onClick={() => {
          handleFormData(variant);
        }}
      >
        <div className="icon">
          <span className={`material-symbols-sharp size-28 ${getSvgClass()}`}>
            {svg}
          </span>
        </div>
        <div className="team-head">
          <h4>{heading}</h4>
        </div>
        <div className="team-subhead">
          <div>{subheading}</div>
        </div>
      </div>
    </>
  );
};

export default PlanSelector;
