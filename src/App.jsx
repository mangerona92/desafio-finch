import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Menu from './components/menu';
import Routes from './routes';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
