import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss'

import Home from './Home'
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/header">
          <Header />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
