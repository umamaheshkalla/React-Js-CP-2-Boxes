function Box(props) {
  const { boxText, className } = props;
  return (
    <div className={className}>
      <p>{boxText}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxText="Small" className="small-box" />
      <Box boxText="Medium" className="medium-box" />
      <Box boxText="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
