import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getSmurfs, addSmurf} from '../actions'

class App extends Component {

  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {addSmurf, getSmurfs})(App);
