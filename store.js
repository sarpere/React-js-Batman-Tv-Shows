import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  tvShows: null,
  tvShows_Details: null
}
// TYPES
export const actionTypes = {
  SET_TVSHOWS: 'SET_TVSHOWS',
  SET_TVSHOWS__DETAILS: 'SET_TVSHOWS__DETAILS'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TVSHOWS:
      return Object.assign({}, state, {
        tvShows: action.payload
      })
    case actionTypes.SET_TVSHOWS__DETAILS:
      return state = {
        ...state,
        tvShows_Details: {
          ...state.tvShows_Details,
          [action.Id]: action.payload
        }
      }
    default:
      return state
  }
}





export const setTvShows = (payload) => dispatch => {
  return dispatch({ type: actionTypes.SET_TVSHOWS, payload: payload })
}

export const setTvShowsDetails = (Id, payload) => dispatch => {
  return dispatch({
    type: actionTypes.SET_TVSHOWS__DETAILS,
    payload: payload,
    Id: Id
  })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}