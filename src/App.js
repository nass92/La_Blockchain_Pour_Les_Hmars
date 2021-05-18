import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import CoinsApi from "./Pages/LsCoins/Api";

function App({ setCrypto }) {

  return (
    <Router>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/list' component={CoinsApi} />
      </Switch>

    </Router >

  );
}

export default App;
