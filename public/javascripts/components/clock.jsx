import React from "react";
import Adjuster from "./adjuster";
import Countdown from "./countdown";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      shortBreakTime: 3,
      longBreakTime: 15,
      workTime: 25,
      cishu: 4,
      timesLeft: 4,
      menu: false
    };



  }
  showMenu(){
    console.log('click');
    this.setState({menu: true});
  }
  hideMenu(){
    this.setState({menu:false});
  }
  //The clock should reset after coming back from the menu if reset is pressed
  //There should be visual transitions implemented through Reactjs
  //The clock should cycle until there are 0 times left
  render() {
    var boxContent;
    if(this.state.menu == false){
	boxContent = <Countdown key={1} showMenu={this.showMenu.bind(this)} />
    } else {
	boxContent = <Adjuster key={2} hideMenu={this.hideMenu.bind(this)}　shortBreakTime={this.state.shortBreakTime} longBreakTime={this.state.longBreakTime} workTime={this.state.workTime} cishu={ this.state.cishu} shortBreakMinus={this.shortBreakMinus.bind(this)} shortBreakPlus={this.shortBreakPlus.bind(this)} longBreakMinus={this.longBreakMinus.bind(this)} longBreakPlus={this.longBreakPlus.bind(this)} workTimeMinus={this.workTimeMinus.bind(this)} workTimePlus={this.workTimePlus.bind(this)} cishuMinus={this.cishuMinus.bind(this)} cishuPlus={this.cishuPlus.bind(this)} />
    }
    return (
      <div　className="row">
      <div className="box col-md-8 col-md-offset-2">
        <div className="text-center title">Pomodoro Clock</div>
	<div className="text-center sub-title">A PRODUCTIVITY TIMER</div>
	<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {boxContent}
        </ReactCSSTransitionGroup>
      </div>
      </div>
    );
  }
  shortBreakMinus(event) {
    var n = this.state.shortBreakTime;
    n = n - 1;
    this.setState({shortBreakTime:n});
  }
  shortBreakPlus(event) {
    var n = this.state.shortBreakTime;
    n = n + 1;
    this.setState({shortBreakTime:n});
  }
  longBreakMinus(event) {
    var n = this.state.longBreakTime;
    n = n - 1;
    this.setState({longBreakTime:n});
  }
  longBreakPlus(event) {
    var n = this.state.longBreakTime;
    n = n + 1;
    this.setState({longBreakTime:n});
  }
  workTimeMinus(event) {
    var n = this.state.workTime;
    n = n - 1;
    this.setState({workTime:n});
  }
  workTimePlus(event) {
    var n = this.state.workTime;
    n = n + 1;
    this.setState({workTime:n});
  }
  cishuMinus(event) {
    var n = this.state.cishu;
    n = n - 1;
    this.setState({cishu:n});
  }
  cishuPlus(event) {
    var n = this.state.cishu;
    n = n + 1;
    this.setState({cishu:n});
  }

  startClock(event) {

  }
}
