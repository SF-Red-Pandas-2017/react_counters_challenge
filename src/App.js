import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
    constructor() {
    super();
    this.state = {
      count: 0,
      counterValues: [
        {
          value: 0,
          howMuchToIncrement: 1
        },
        {
          value: 0,
          howMuchToIncrement: 2
        },
        {
          value: 0,
          howMuchToIncrement: 3
        }
      ]
    };
     this.increment = this.increment.bind(this)
     this.decrement = this.decrement.bind(this)
     this.removeCounter = this.removeCounter.bind(this)
  }

  increment(index, howMuchToIncrement) {
    this.setState((prevState, props) => {
    prevState.counterValues[index].value += howMuchToIncrement;
    return prevState;
    });
  }

  decrement(index, howMuchToIncrement) {
    this.setState((prevState, props) => {
    prevState.counterValues[index].value -= howMuchToIncrement;
    return prevState;
    });
  }

  removeCounter(counter) {
    console.log(counter)
    const newState = this.state.counterValues;
    console.log(this)
    console.log(newState)
    console.log(newState.indexOf(counter))
    if (newState.indexOf(counter) >= -1){
      console.log(counter.indexToModify)
      newState.splice(counter, 1);
      console.log(newState)
      this.setState({counterValues: newState})
    }
    //     this.setState((prevState) => {
    //   prevState.counterValues.splice(index, 0);
    // });
  }

  render() {
    const counterComponent = this.state.counterValues.map((value, index, wholeArray) => {
      return (
        <Counter key={ index } indexToModify={ index } count={ value.value } increment={ this.increment } decrement={ this.decrement } howMuchToIncrement={ value.howMuchToIncrement } removeCounter={ this.removeCounter }/>
        )
    })
    return (
      <div className="page-center-frame">
        {
          counterComponent
        }

      </div>
    );
  }
}

export default App;

