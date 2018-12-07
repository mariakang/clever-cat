const Field = (props) => {
  return (
    <div className="row">
      <label for={props.id}>{props.label}: </label>
      <input id={props.id}
        value={props.value}
        onChange={props.onChange}
        type={props.type}/>
    </div>
  );
}

//module.exports = Field;
