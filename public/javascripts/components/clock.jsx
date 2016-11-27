import React from "react";
import ReactDOM from "react-dom";

var onChange = function(numbers) {
　　ReactDOM.render(<App numbers={numbers}/>, document.getElementById("content"));
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
    return (
      <div className="clock-component　row">
        <div className="text-center title">Pomodoro Clock</div>
	<div className="text-center sub-title">A PRODUCTIVITY TIMER</div>

	<div className="time-container">
	  <button className="" onClick={this.shortBreakMinus}><i className="fa fa-minus fa-1g"></i></button>
          <div>{this.props.numbers.shortBreakTime}</div>
	  <button className=""><i className="fa fa-plus fa-1g" onClick={this.shortBreakPlus}></i></button>
	</div>

	<div className="time-container">
	  <button className="" onClick={this.longBreakMinus}><i className="fa fa-minus fa-1g"></i></button>
          <div>{this.props.numbers.longBreakTime}</div>
	  <button className=""><i className="fa fa-plus fa-1g" onClick={this.longBreakPlus}></i></button>
	</div>

	<div className="time-container">
	  <button className="" onClick={this.workTimeMinus}><i className="fa fa-minus fa-1g"></i></button>
          <div>{this.props.numbers.workTime}</div>
	  <button className=""><i className="fa fa-plus fa-1g" onClick={this.workTimePlus}></i></button>
	</div>

	<div className="cishu-container">
	  <button className="" onClick={this.cishuMinus}><i className="fa fa-minus fa-1g"></i></button>
          <div>{this.props.numbers.cishu}</div>
	  <button className=""><i className="fa fa-plus fa-1g" onClick={this.cishuPlus}></i></button>
	</div>

	<div id="countdown-clock"></div>
        
      </div>
    );
  }
  shortBreakMinus(event) {
    console.log('d');
    
    var newNumbers = this.props.numbers;
    newNumbers.shortBreakTime = newNumbers.shortBreakTime - 1;
    onChange(newNumbers);
  }

//Rewrite all of these
  shortBreakPlus(event) {
    var newBreakTime = this.state.shortBreakTime + 1;
    this.setState({
      shortBreakTime: newBreakTime
    });
    onChange();
  }
  longBreakMinus(event) {
    var newBreakTime = this.state.longBreakTime - 1;
    this.setState({
      longBreakTime: newBreakTime
    });
    onChange();
  }
  longBreakPlus(event) {
    var newBreakTime = this.state.longBreakTime + 1;
    this.setState({
      longBreakTime: newBreakTime
    });
    onChange();
  }
  workTimeMinus(event) {
    var newTime = this.state.longBreakTime - 1;
    this.setState({
      longBreakTime: newTime
    });
    onChange();
  }
  workTimePlus(event) {
    var newTime = this.state.workTime + 1;
    this.setState({
      workTime: newTime
    });
    onChange();
  }
  cishuMinus(event) {
    var newCishu = this.state.cishu - 1;
    this.setState({
      longBreakTime: newCishu
    });
    onChange();
  }
  cishuPlus(event) {
    var newCishu = this.state.cishu + 1;
    this.setState({
      workTime: newCishu
    });
    onChange();
  }

  startClock(event) {

  }
}
