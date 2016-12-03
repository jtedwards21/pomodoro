import React from "react";
import ReactDOM from "react-dom";
import JQuery from "jquery";

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
      cishu: 0,
      menu: false
    };


  }
  showMenu(){
    console.log('click');
    JQuery(".background").animate({
	opacity: .8
    }, "slow", function(){
JQuery(".adjuster").show("slow");
})
  }
  hideMenu(){
    JQuery(".adjuster").hide("slow", function(){
JQuery(".background").animate({opacity: 0}, 5000);
})
  }
  render() {
    console.log(this.props);
    return (
      <div　className="row">
      <div className="col-md-12">
	
	<div className="adjuster col-md-4 col-md-offset-4">

	  <div className="title">Settings</div>

	  <form　className="form-horizontal">
	  <div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Short Break</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <div className="input-group-addon" onClick={this.longBreakMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></div>
              <div className="form-control">{this.props.numbers.shortBreakTime}</div>
	      <div className="input-group-addon"  onClick={this.longBreakPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></div>
	    </div>
	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Long Break</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <div className="input-group-addon" onClick={this.longBreakMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></div>
              <div className="form-control">{this.props.numbers.longBreakTime}</div>
	      <div className="input-group-addon"  onClick={this.longBreakPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></div>
	    </div>
 	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Work Time</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <span className="input-group-addon" onClick={this.workTimeMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
              <div className="form-control">{this.props.numbers.workTime}</div>
	      <span className="input-group-addon"  onClick={this.workTimePlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	    </div>
	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2"># of Times</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <span className="input-group-addon" onClick={this.cishuMinus.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
              <div className="form-control">{this.props.numbers.cishu}</div>
	      <span className="input-group-addon"  onClick={this.cishuPlus.bind(this)}><i className="glyphicon glyphicon-minus"></i></span>
	    </div>
	  </div>
	  </form>
	
	  <button className="btn btn-default btn-large">Close</button>

	</div>

        <div className="box">
          <div className="clock-component">
            <div className="text-center title">Pomodoro Clock</div>
	    <div className="text-center sub-title">A PRODUCTIVITY TIMER</div>
	    <button className="btn btn-default btn-large" onClick={this.showMenu.bind(this)}>Settings</button>
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
