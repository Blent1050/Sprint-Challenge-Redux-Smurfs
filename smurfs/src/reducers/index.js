import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: '',
        fetching: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetching: false,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
    default:
      return state;
  }
}

export default smurfReducer;