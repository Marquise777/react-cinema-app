import React from 'react';
import { Provider } from "react-redux"

import store from "./redux/store"

import { Header } from "./components/header"

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>

  );
}

export default App;
