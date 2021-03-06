/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = value => {
  return {
    type: ADD_SMURF,
    payload: value
  }
}

export const getSmurfs = dispatch => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({type: FETCH_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err});
    })
  }
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
