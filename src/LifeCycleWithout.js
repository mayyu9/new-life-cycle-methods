import React from 'react';
import './LifeCycleWithout.scss';

class LifeCycleWithout extends React.Component{

  constructor(props){
    super(props);
    this.state={counter:0};
    this.add=this.add.bind(this);
    this.minus=this.minus.bind(this);
  }

  add(event){
    event.preventDefault();
    this.setState((prevState) => {
      console.log('add one: '+prevState.counter);
      return {counter: prevState.counter + 1};
    });
  }

  minus(event){
    event.preventDefault();
    this.setState((prevState) => {
      console.log('minus one: '+prevState.counter);
      return {counter: prevState.counter - 1};
    });
  }

  /* the componentWillMount will get triggered only once */
  componentWillMount(){
    console.log('will mount');
  }

  /*componentWillReceiveProps this life cycle method will triggered only when the props from parent gets updated.*/
  componentWillReceiveProps(nextProps){
    console.log('will receive props: '+JSON.stringify(nextProps));
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

export default LifeCycleWithout;
