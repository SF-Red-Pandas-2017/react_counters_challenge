import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // this.increment = this.props.increment.bind(this, this.props.incrementValue)
    // this.state = {
    //   count: 0
    // };
}
  //   this.increment = this.increment.bind(this)
  //   this.decrement = this.decrement.bind(this)
  // }

  // increment(param) {
  //   this.setState({ count: this.state.count + param })
  // }

  // decrement() {
  //   this.setState({ count: this.state.count - this.props.myProps })
  // }

  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.increment(this.props.incrementValue, this.props.count)}>+</button>
        <div className="count">{this.props.count}</div>
        // <button onClick={this.decrement}>-</button>

      </div>
    );
  }
}

export default Counter


// <MyComponent onClick={() => this.increment(someArgument, someOtherArgument)} />
