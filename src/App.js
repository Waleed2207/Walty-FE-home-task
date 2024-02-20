import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchComponent from './components/SearchComponent';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchComponent />  
      </div>
    </Provider>
  );
};

export default App;
