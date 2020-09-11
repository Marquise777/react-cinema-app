import React from 'react';
import { Provider } from "react-redux"

import store from "./redux/store"

import { Header } from "./components/header"
import Main from "./components/main/Main"

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
      </div>
    </Provider>

  );
}

export default App;
