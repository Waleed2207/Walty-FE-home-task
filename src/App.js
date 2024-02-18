// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchComponent from './components/SearchComponent';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Walty Photos Engine</h1>
        <SearchComponent />  
      </div>
    </Provider>
  );
};

export default App;
