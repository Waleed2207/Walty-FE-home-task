// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));