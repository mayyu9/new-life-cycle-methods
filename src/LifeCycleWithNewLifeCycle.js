import React from 'react';
import './LifeCycleWithNewLifeCycle.scss';

class LifeCycleWithNewLifeCycle extends React.Component{

  constructor(props){
    super(props);
    this.state={counter:0};
    this.add=this.add.bind(this);
    this.minus=this.minus.bind(this);
  }

  add(event){
    event.preventDefault();
    this.setState((prevState) => {
      //console.log('add one: '+prevState.counter);
      return {counter: prevState.counter + 1};
    });
  }

  minus(event){
    event.preventDefault();
    this.setState((prevState) => {
      //console.log('minus one: '+prevState.counter);
      return {counter: prevState.counter - 1};
    });
  }

  /*
  this life cycle method get triggered on every render of the component.
  this life cycle method is  replacement for componentWillMount and componentWillReceiveProps methods
  */

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps: '+'nextProps: '+ nextProps.maxCount +' ' +'prevState: '+prevState.counter);
    if(prevState.counter > nextProps.maxCount){
      return{
        counter: nextProps.maxCount
      }
    }
    return null;
  }

/*
  getSnapshotBeforeUpdate: is invoked right before the most recently rendered output is committed to e.g. the DOM.
  this method take a snapshot of the current store structure and pass that to the componentDidUpdate life cycle.
*/
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: '+ 'prevProps: '+prevProps.maxCount+ ' '+'prevState: '+prevState.counter);
    return '[maxCount= ' + prevProps.maxCount + ' & counter= ' + prevState.counter + ']';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: '
        + 'prevProps: ' + prevProps.maxCount+ ' '
        + ' prevState: ' + prevState.counter+ ' '
        + 'snapshot=' + snapshot);

    if (prevState.counter !== this.state.counter) {
        //console.log('save counter value[' + this.state.counter + '] to storage.');
        sessionStorage.setItem('counter', this.state.counter);
    }
  }

  render(){
    return(
      <div>
        <div className="counter">
        {this.state.counter}
        </div>
        <div className="btns">
        <button className="add-btn" onClick={this.add}>ADD</button>
        <button className="minus-btn" onClick={this.minus}>MINUS</button>
        </div>
      </div>
    )
  }
};

export default LifeCycleWithNewLifeCycle;
