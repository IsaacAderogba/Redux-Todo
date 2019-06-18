import React from 'react';
import { Route } from "react-router-dom";
import Home from './pages/Home'

import './App.css';

function App() {
  return (
    <Route exact path="/" render={routeProps => (
      <Home {...routeProps} />
    )} />
  );
}

export default App;

/*
  App needs the 'todo' state
*/