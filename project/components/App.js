import React from 'react';
import Func from './../public/functions.js';
import BarChart from './BarChart.js';
import Field from './Field.js';
import Overpayment from './Overpayment.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      startDate: Func.thisMonthStr(),
      openingBalance: 100000,
      interestRate: 2.19,
      term: "",
      standardPayment: 0,
      overpayments: [],
      calculation: [],
      totalInterest: [],
      endDate: [],
      status: "uncalculated",
      message: ""
    }
    this.handleAddPayment = this.handleAddPayment.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeOB = this.handleChangeOB.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeStandard = this.handleChangeStandard.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleChangePayment = this.handleChangePayment.bind(this);
    this.handleDeletePayment = this.handleDeletePayment.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState != this.state) {
      let term = this.state.term;
      if (term != "") {
        let termUpdate = prevState.term != term;
        let ob = this.state.openingBalance;
        let obUpdate = prevState.openingBalance != ob;
        let rate = this.state.interestRate;
        let rateUpdate = prevState.interestRate != rate;
        if (termUpdate || obUpdate || rateUpdate) {
          let n = term * 12;
          let c = Func.round(rate / 12 / 100, 7);
          let k = Math.pow(1 + c, n);
          let p = Func.round(ob * c * k / (k - 1), 2);
          console.log("p: " + p);
          this.setState({
            standardPayment: p,
            status: "uncalculated",
            message: "",
            calculation: [],
            totalInterest: [],
            endDate: []
          });
          console.log("standardPayment updated to " + this.state.standardPayment);
        }
      }
    }
  }
  handleAddPayment(event) {
    let newPayment = {start: this.state.startDate,
                      end: "",
                      value: 0};
    let newPaymentsArray = [...this.state.overpayments, newPayment];
    console.log(newPaymentsArray);
    this.setState({
      overpayments: newPaymentsArray,
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("overpayments updated to " + this.state.overpayments);
  }
  handleChangeStartDate(event) {
    this.setState({
      startDate: event.target.value + "-01",
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("startDate updated to " + this.state.startDate);
  }
  handleChangeOB(event) {
    this.setState({
      openingBalance: Number(event.target.value),
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("openingBalance updated to " + this.state.openingBalance);
  }
  handleChangeRate(event) {
    this.setState({
      interestRate: Number(event.target.value),
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("interestRate updated to " + this.state.interestRate);
  }
  handleChangeTerm(event) {
    this.setState({
      term: Number(event.target.value),
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("term updated to " + this.state.term);
  }
  handleChangeStandard(event) {
    this.setState({
      standardPayment: Number(event.target.value),
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("standardPayment updated to " + this.state.standardPayment);
  }
  handleChangePayment(index, object) {
    let payments = this.state.overpayments;
    let pre = payments.slice(0, index);
    let post = payments.slice(index + 1);
    this.setState({
      overpayments: [...pre, object, ...post],
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("overpayments updated to " + this.state.overpayments);
  }
  handleDeletePayment(event, index) {
    let payments = this.state.overpayments;
    let pre = payments.slice(0, index);
    let post = payments.slice(index + 1);
    let newOverPayments = [...pre, ...post];
    console.log(newOverPayments);
    this.setState({
      overpayments: newOverPayments,
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []     
    });
    console.log("overpayments updated to " + this.state.overpayments);
  }
  handleCalculate(event) {
    this.setState({
      status: "uncalculated",
      message: "",
      calculation: [],
      totalInterest: [],
      endDate: []
    });
    console.log("status updated to " + this.state.status);
    let error = false;
    let date = this.state.startDate;
    if (date == "") {
      this.setState({
        status: "error",
        message: "Start date must be defined"
      });
      console.log("status updated to " + this.state.status + ": " + this.state.message);
      error = true;
    } else {
      let balance = this.state.openingBalance;
      if (balance <= 0 || balance == "") {
        this.setState({
          status: "error",
          message: "Opening balance must be greater than 0"
        });
        console.log("status updated to " + this.state.status + ": " + this.state.message);
        error = true;
      } else {
        let rate = this.state.interestRate / 100;
        if (rate <= 0 || rate == "") {
          this.setState({
            status: "error",
            message: "Interest rate must be greater than 0"
          });
          console.log("status updated to " + this.state.status + ": " + this.state.message);
          error = true;
        } else {
          let sp = this.state.standardPayment;
          let initialInt = Func.round(rate / 12 * balance, 5);
          console.log("sp: " + sp + ", initialInt: " + initialInt);
          if (sp < initialInt || sp == "") {
            this.setState({
              status: "error",
              message: "Standard payment must cover the first month's interest"
            });
            console.log("status updated to " + this.state.status + ": " + this.state.message);
            error = true;
          } else {
            let overpayments = this.state.overpayments;
            if (overpayments.filter(x => x.value < 0).length > 0) {
              this.setState({
               status: "error",
               message: "Overpayments mustn't be negative"
              });
              console.log("status updated to " + this.state.status + ": " + this.state.message);
              error = true;
            } else {
              let data = [];
              let shadowBalance = balance;
              let totalInt = 0;
              let shadowTotalInt = 0
              let endDate = {};
              let shadowEndDate = {};
              let loop = true;
              let ended = false;
              while (loop) {
                let dateVal = Date.parse(date);
                let year = parseInt(date.slice(0, 4));
                let month = parseInt(date.slice(5, 7));
                let days = Func.getDaysInMonth(month, year);
                let dailyRate = rate / (Func.isLeap(year) ? 366 : 365);
                let interest = Func.round(balance * dailyRate * days, 2);
                totalInt += interest;
                let shadowInterest = Func.round(shadowBalance * dailyRate * days, 2);
                shadowTotalInt += shadowInterest;
                let payment = sp;
                if (payment > balance + interest) {      
                  payment = Func.round(balance + interest, 2);
                } else {
                  if (overpayments.length > 0) {
                    function filterPay (obj) {
                      let from = Date.parse(obj.start);
                      let to = obj.end == "" ? "" : Date.parse(obj.end);
                      return from <= dateVal && (to >= dateVal || to == "");
                    }
                    let op = overpayments.filter(filterPay).map(x => x.value).reduce((x, y) => x + y, 0);
                    payment = Func.round(sp + op, 2);
                    if (payment > balance + interest) {      
                      payment = Func.round(balance + interest, 2);
                    }
                  }
                }
                let shadowPayment = sp;
                if (sp > shadowBalance + shadowInterest) {
                  shadowPayment = Func.round(shadowBalance + shadowInterest, 2);
                } 
                let newBalance = Func.round(balance + interest - payment, 2);
                let newShadowBalance = Func.round(shadowBalance + shadowInterest - shadowPayment, 2);
                data.push({
                  month: month,
                  year: year,
                  ob: balance,
                  interest: interest,
                  paid: payment,
                  cb: newBalance,
                  shadowOb: shadowBalance,
                  shadowPaid: shadowPayment,
                  shadowCb: newShadowBalance
                });
                if (!ended && newBalance <= 0) {
                  endDate = {
                    month: month,
                    year: year
                  };
                  ended = true;
                }
                if (newShadowBalance <= 0) {
                  shadowEndDate = {
                    month: month,
                    year: year
                  };
                  loop = false;
                } else {
                  balance = newBalance;
                  shadowBalance = newShadowBalance;
                  let newMonth = month == 12 ? 1 : month + 1;
                  date = newMonth == 1 ? (year + 1) + "-01-01" : year + "-" + (newMonth < 10 ? "0" : "") + newMonth + "-01";
                }
              }
              this.setState({
                status: "calculated",
                message: "",
                calculation: data,
                totalInterest: [totalInt, shadowTotalInt],
                endDate: [endDate, shadowEndDate]
              });
              console.log("state updated to " + this.state.status + ": " + this.state.calculation + "; ", + this.state.totalInterest.join(", ") + "; ", + this.state.endDate);
            }
          }
        }
      }
    }
  }

  render() {
    const hasOverpay = this.state.overpayments.length > 0;
    const subHeading = hasOverpay ? (<div className="row overpay"><h2>Overpayments</h2></div>) : null;
    const overpayments = this.state.overpayments.map((x, i) => (
      <Overpayment index={i}
        start={x.start.slice(0, 7)}
        end={x.end.slice(0, 7)}
        value={x.value}
        onChange={this.handleChangePayment}
        onDelete={this.handleDeletePayment}/> 
    ));
    let result = null;
    if (this.state.status == "error") {
      result = (<div className="description"><br/>{this.state.message}</div>);
    } else if (this.state.status == "calculated") {
      let fpDate = Func.formatDate(this.state.endDate[0].month, this.state.endDate[0].year);
      let totalInt = Func.formatNum(this.state.totalInterest[0]);
      let info = (
        <div className="info">
          <div className="row">
            <div>Final payment date: </div>
            <div>{fpDate}</div>
          </div>
          <div className="row">
            <div>Total interest paid: </div>
            <div>{totalInt}</div>
          </div>
        </div>
      );
      if (hasOverpay) {
        let shadowFpDate = Func.formatDate(this.state.endDate[1].month, this.state.endDate[1].year);
        let shadowTotalInt = Func.formatNum(this.state.totalInterest[1]);
        info = (
          <div className="info">
            <h3>Final payment date</h3>
            <div className="info-row row">
              <div>With overpayments: </div>
              <div>{fpDate}</div>
            </div>
            <div className="info-row row">
              <div>Without overpayments: </div>
              <div>{shadowFpDate}</div>
            </div>
            <h3>Total interest paid</h3>
            <div className="info-row row">
              <div>With overpayments: </div>
              <div>{totalInt}</div>
            </div>
            <div className="info-row row">
              <div>Without overpayments: </div>
              <div>{shadowTotalInt}</div>
            </div>
          </div>
        );
      }
      result = (
        <div className="column">
          <div className="graph-title">Mortgage Balance Over Time</div>
          <div className="graph">
            <div className="axis-label y-axis-label">Balance<br/>(£)</div>
            <BarChart data={this.state.calculation}/>
            {info}
          </div>
          <div className="axis-label x-axis-label">Year</div>
        </div>
      );
    }
    return (
      <div className="main">
        <div className="container">
          <h1>{'Mortgage Calculator for ' + this.props.name}</h1>
          <div className="row">
            <Field id="start-date"
              value={this.state.startDate.slice(0, 7)} 
              onChange={this.handleChangeStartDate}
              label="Start date"
              type="month"/>
            <Field id="ob"
              value={this.state.openingBalance} 
              onChange={this.handleChangeOB}
              label="Opening balance (£)"
              type="number"/>
            <Field id="rate"
              value={this.state.interestRate} 
              onChange={this.handleChangeRate}
              label="Interest rate (%)"
              type="number"/>
          </div>
          <div className="row">
            <Field id="term"
              value={this.state.term} 
              onChange={this.handleChangeTerm}
              label="Mortgage term (years)"
              type="number"/>
              <p className="description">OR</p>
            <Field id="standard-payment"
              value={this.state.standardPayment} 
              onChange={this.handleChangeStandard}
              label="Standard monthly payment (£)"
              type="number"/>
          </div>
          {subHeading}
          {overpayments}
          <button type="button" onClick={this.handleAddPayment}>Add Overpayment</button>
          <button type="button" onClick={this.handleCalculate}>Calculate</button>
          {result}
        </div>
      </div>
    );
  }
};

module.exports = App;
