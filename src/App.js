import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
        counters: [0,0,0]
      }


    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(incrementValue, index) {
    this.state.counters[index] += incrementValue
    this.setState({ counters: this.state.counters })
  }

  decrement(decrementValue, index){
    this.state.counters[index] -= decrementValue
    this.setState({ counters: this.state.counters })
  }

  calculateTotal() {
    const totalCount = this.state.counters.reduce((count, sum) =>
      count + sum)
    return totalCount
  }

  render() {
    return (
      <div className="page-center-frame">
          {this.state.counters.map((counterValue, index) =>
              <Counter
                amount={counterValue}
                increment={() => this.increment((index + 1), index)}
                // increment={this.increment}
                decrement={() => this.decrement((index + 1), index)}
              />
          )}

        <span>
          { this.calculateTotal() }
        </span>

      </div>
    );
  }
}

export default App;
