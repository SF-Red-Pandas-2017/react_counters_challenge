import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.increment = this.increment.bind(this)
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0
    };
  }

  incrementCounters = [1,2,3]

  increment(param, count) {
    console.log(this.state["count" + param])
    this.setState({ count: this.state["count" + param]})
    console.log(count)
  };

  // decrement(props) {
  //   this.setState({ count: this.state.count - props })
  // };

  render() {
    return (
      <div className="page-center-frame">
        <Counter incrementValue={1} increment={this.increment} count={this.state[`count${value}`]}/>
        <Counter incrementValue={2} increment={this.increment} count={this.state.count2}/>
        <Counter incrementValue={3} increment={this.increment} count={this.state.count3}/>
      </div>
    );
  }
}

export default App;

