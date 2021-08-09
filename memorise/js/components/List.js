const List = (props) => {
  const items = props.record.items.map((x, i) => (
    <div className="tableRow-3">
      <div className="brown">{(i + 1) + ". "}</div>
      <div className="tableCell brown">{x[0]}</div>
      <div className="tableCell brown">{x[1]}</div>
    </div>
  ));
  return (
    <div className="column">
      <h1>{props.record.title}</h1>
      <div className="table">
        <div className="tableRow-3 tableHeading">
          <div className="columnHeading"></div>
          <div className="columnHeading"><h3>{props.record.column1}</h3></div>
          <div className="columnHeading"><h3>{props.record.column2}</h3></div>
        </div>
        <div className="table tableBody">
          {items}
        </div>
      </div>
      <div className="tableEnding"></div>
    </div>
  );
}
