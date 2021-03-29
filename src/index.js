import React from 'react';
import Immutable from 'immutable'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import Portfolio from './Portfolio';

// Initial State
const initialState = Immutable.fromJS({})

// Content Creators
export const SET_SHOW_MODAL = 'set-show-modal'
export const setShowModal = value => ({type: SET_SHOW_MODAL, value})

// Reducer
export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SHOW_MODAL:
      return state.set('showModal', action.value)
      default:
        return state
  }
}

// Create Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware()))

// Selectors
export const getShowModal = state => state.get('showModal', false)

ReactDOM.render(
  <Provider store={ store }>
    <Portfolio />
  </Provider>,
  document.getElementById('root')
);
