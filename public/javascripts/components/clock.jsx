import React from "react";
import ReactDOM from "react-dom";

var onChange = function(numbers) {
　　ReactDOM.render(<Clock numbers={numbers}/>, document.getElementById("content"));
}

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      shortBreakTime: 0,
      longBreakTime: 0,
      workTime: 0,
      cishu: 0
      
    };


  }
  render() {
    console.log(this.props);
    return (
      <div>
      <div className="container">
      <div className="clock-component　row">
        <div className="text-center title">Pomodoro Clock</div>
	<div className="text-center sub-title">A PRODUCTIVITY TIMER</div>
	
	<div className="adjuster col-sm-6 col-sm-offset-3">
	<div className="time-container col-sm-3">
	  <button className="left-button btn btn-default" onClick={this.shortBreakMinus.bind(this)}><i className="fa fa-minus fa-1g"></i></button>
          <div className="number">{this.props.numbers.shortBreakTime}</div>
	  <button className="right-button btn btn-default"  onClick={this.shortBreakPlus.bind(this)}><i className="fa fa-plus fa-1g"></i></button>
	</div>

	<div className="time-container col-sm-3">
	  <button className="left-button btn btn-default" onClick={this.longBreakMinus.bind(this)}><i className="fa fa-minus fa-1g"></i></button>
          <div className="number">{this.props.numbers.longBreakTime}</div>
	  <button className="right-button btn btn-default"  onClick={this.longBreakPlus.bind(this)}><i className="fa fa-plus fa-1g"></i></button>
	</div>

	<div className="time-container col-sm-3">
	  <button className="left-button btn btn-default" onClick={this.workTimeMinus.bind(this)}><i className="fa fa-minus fa-1g"></i></button>
          <div　 className="number">{this.props.numbers.workTime}</div>
	  <button className="right-button btn btn-default" onClick={this.workTimePlus.bind(this)}><i className="fa fa-plus fa-1g"></i></button>
	</div>

	<div className="cishu-container col-sm-3">
	  <button className="left-button btn btn-default" onClick={this.cishuMinus.bind(this)}><i className="fa fa-minus fa-1g"></i></button>
          <div className="number">{this.props.numbers.cishu}</div>
	  <button className="right-button btn btn-default" onClick={this.cishuPlus.bind(this)}><i className="fa fa-plus fa-1g"></i></button>
	</div>
	</div>
      </div>
      </div>
      <div id="countdown-clock" className=""></div>
      </div>
    );
  }
  shortBreakMinus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.shortBreakTime = newNumbers.shortBreakTime - 1;
    onChange(newNumbers);
  }
  shortBreakPlus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.shortBreakTime = newNumbers.shortBreakTime + 1;
    onChange(newNumbers);
  }
  longBreakMinus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.longBreakTime = newNumbers.longBreakTime - 1;
    onChange(newNumbers);
  }
  longBreakPlus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.longBreakTime = newNumbers.longBreakTime + 1;
    onChange(newNumbers);
  }
  workTimeMinus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.workTime = newNumbers.workTime - 1;
    onChange(newNumbers);
  }
  workTimePlus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.workTime = newNumbers.workTime + 1;
    onChange(newNumbers);
  }
  cishuMinus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.cishu = newNumbers.cishu - 1;
    onChange(newNumbers);
  }
  cishuPlus(event) {
    var newNumbers = this.props.numbers;
    newNumbers.cishu = newNumbers.cishu + 1;
    onChange(newNumbers);
  }

  startClock(event) {

  }
}
