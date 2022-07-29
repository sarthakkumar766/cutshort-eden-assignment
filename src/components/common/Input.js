const getId = (val) => {
  return val.replaceAll(" ", "");
};

const Input = ({
  label,
  placeholder,
  type,
  optional,
  urlHint,
  handleFormData,
  value,
}) => {
  const getInputClassName = () => {
    if (urlHint) {
      return "override-input-styles";
    }
  };
  return (
    <>
      <div className="input-container">
        <label className="label-style" htmlFor={getId(label)}>
          {label}
        </label>
        {optional ? (
          <span className="optional-label"> {"(optional)"} </span>
        ) : (
          ""
        )}
        <div className="conditional-input-container">
          {urlHint ? (
            <>
              <input
                className="input-styles hint"
                disabled={true}
                placeholder={urlHint}
              />
            </>
          ) : (
            ""
          )}
          <input
            className={`input-styles ${getInputClassName()}`}
            name={getId(label)}
            id={getId(label)}
            type={type}
            placeholder={placeholder}
            onChange={handleFormData}
            value={value}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
