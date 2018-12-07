import React from 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.min.js';
import Func from './../public/functions.js';
import Field from './Field.js';

class Overpayment extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        from: this.props.start,
        to: this.props.end,
        value: Number(this.props.value),
      };
      this.handleChangeValue = this.handleChangeValue.bind(this);
      this.handleChangeFrom = this.handleChangeFrom.bind(this);
      this.handleChangeTo = this.handleChangeTo.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }
   componentDidUpdate(prevProps, prevState) {
     if (prevProps != this.props) {
       this.setState({
         from: this.props.start,
         to: this.props.end,
         value: Number(this.props.value),
       })
       console.log("state updated to " + this.state);
     } else if (prevState != this.state ) {
       let fromUpdate = this.state.from != this.props.start;
       let toUpdate = this.state.to != this.props.end;
       let valueUpdate = this.state.value != Number(this.props.value);
       if (fromUpdate || toUpdate || valueUpdate) {
         let payment = {
           start: this.state.from + "-01",
           end: this.state.to == "" ? "" : this.state.to + "-01",
           value: this.state.value
         };
         console.log(payment);
         this.props.onChange(this.props.index, payment);
       }
     }
   }
   handleChangeFrom(event) {
     this.setState({
       from: event.target.value
     });
     console.log("from updated to " + this.state.from);
   }
   handleChangeTo(event) {
     this.setState({
       to: event.target.value
     });
     console.log("to updated to " + this.state.to);
   }
   handleChangeValue(event) {
     this.setState({
       value: Number(event.target.value)
     });
     console.log("value updated to " + this.state.value);
   }
  handleDelete(event) {
    this.props.onDelete(event, this.props.index);
  }
   render() {
     let index = this.props.index;
     return (
      <div id={"payment-" + index} className="row"> 
        <Field id={"from-" + index}
          value={this.state.from} 
          onChange={this.handleChangeFrom}
          label="From"
          type="month"/>
        <Field id={"to-" + index}
          value={this.state.to} 
          onChange={this.handleChangeTo}
          label="To"
          type="month"/>
        <Field id={"value-" + index}
          value={this.state.value} 
          onChange={this.handleChangeValue}
          label="Amount (£)"
          type="number"/>
        <button type="button" onClick={this.handleDelete}>Delete</button>
      </div>
     );
   }
}

module.exports = Overpayment;
