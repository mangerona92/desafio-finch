import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Menu from './components/menu'
import Router from './router'

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Router />
    </Provider>
  );
}

export default App;
