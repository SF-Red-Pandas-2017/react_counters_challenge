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
     this.componentDidMount = this.componentDidMount.bind(this)
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
    const newState = this.state.counterValues;
    if (newState.indexOf(counter) >= -1){
      newState.splice(counter, 1);
      this.setState({counterValues: newState})
    }
  }

  componentDidMount(counter) {
    fetch('http://numbers-api.herokuapp.com/counters')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
      let counterValues = data.map((counter) => {
        return(
          <div key={counter.results}>
             {console.log(counter)}
          </div>
          )
      })

    })
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

