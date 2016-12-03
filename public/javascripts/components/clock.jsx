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
      <div　className="row">
      <div className="col-md-12">

	<div className="adjuster">
	　　<span className="label label-info">Short Break</span>
	  <div className="input-group">
	    <span className="input-group-addon" onClick={this.longBreakMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
            <div className="form-control input-middle">{this.props.numbers.shortBreakTime}</div>
	    <span className="input-group-addon"  onClick={this.longBreakPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	  </div>

	　　<span className="label label-info">Long Break</span>
	　　<div className="input-group">
	    <span className="input-group-addon" onClick={this.longBreakMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
            <div className="form-control input-middle">{this.props.numbers.longBreakTime}</div>
	    <span className="input-group-addon"  onClick={this.longBreakPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	  </div>

	　　<span className="label label-info">Work Time</span>
	　　<div className="input-group">
	    <span className="input-group-addon" onClick={this.workTimeMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
            <div className="form-control input-middle">{this.props.numbers.workTime}</div>
	    <span className="input-group-addon"  onClick={this.workTimePlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	  </div>

	　　<span className="text-center"># of Times</span>
	　　<div className="input-group">
	    <span className="input-group-addon" onClick={this.cishuMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
            <div className="form-control input-middle">{this.props.numbers.cishu}</div>
	    <span className="input-group-addon"  onClick={this.cishuPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	  </div>
	</div>

        <div className="box">
          <div className="clock-component">
            <div className="text-center title">Pomodoro Clock</div>
	    <div className="text-center sub-title">A PRODUCTIVITY TIMER</div>
            <div id="countdown-clock" className=""></div>
	  </div>
        </div>
      </div>
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
