const TitleSubtitle = ({ title, subtitle }) => {
  return (
    <>
      <div className="title-subtitle-container">
        <h1>{title}</h1>
        <div className="subtitle">{subtitle}</div>
      </div>
    </>
  );
};

export default TitleSubtitle;
