import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter myProps={1} />
        <Counter myProps={2} />
        <Counter myProps={3} />
      </div>
    );
  }
}

export default App;
