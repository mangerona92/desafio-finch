import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import MainLayout from "./pages/Layout/";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
