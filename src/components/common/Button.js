const Button = ({ name, nextStep, disabled }) => {
  return (
    <>
      <button className="btn-styles" onClick={nextStep} disabled={disabled}>
        {name}
      </button>
    </>
  );
};

export default Button;
