//import React from 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js';
//import Func from './../public/functions.js';

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

module.exports = Field;
