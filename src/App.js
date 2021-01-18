import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }
//dispatch()method is provided by connect()
  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { items: state.items };
};


export default connect(mapStateToProps)(App);
//(a) to only re-render our App component when specific changes to the state occur,
//(b) to only provide the slice of the state that we need to our App component.
//So we will need (1) a function that listens to every change in the store and then (2) filters out the changes relevant to a particular component to (3) provide to that component. 
//Provider ensures that our entire React application can potentially access data from the store. Then connect(), allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data.