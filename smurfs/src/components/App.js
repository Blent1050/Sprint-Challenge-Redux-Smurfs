import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getSmurfs, addSmurf} from '../actions'

class App extends Component {

  state = {
      name: '',
      age: '',
      height: ''
  }
  componentDidMount(){
    this.props.getSmurfs();
  }

  handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
  };
  handleAddingSmurf = (e, value) => {
    console.log(value);
    e.preventDefault();
    this.props.addSmurf(value);
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleAddingSmurf(e, this.state)}>
          <input onChange={this.handleChanges} type='text' placeholder='name' name='name'/>
          <input onChange={this.handleChanges} type='text' placeholder='age' name='age'/>
          <input onChange={this.handleChanges} type='text' placeholder='height' name='height'/>
          <button type='submit'>Submit</button>
        </form>

        <div>
        {
          this.props.smurfs.map((smurf,key) => {
            return(
              <div key={key}>
                <h1>{smurf.name}</h1>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {addSmurf, getSmurfs})(App);
